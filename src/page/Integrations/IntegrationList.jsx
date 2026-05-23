import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../Auth/Api";
import Modal from "../../comp/Modal";

const IntegrationList = () => {
  const navigate = useNavigate();
  const [integrations, setIntegrations] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [editItem, setEditItem] = useState(null);
const [successMessage, setSuccessMessage] = useState("");
const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchIntegrations();
  }, []);

  useEffect(() => {
    const result = integrations.filter((item) =>
      item.platform.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [search, integrations]);

  const fetchIntegrations = async () => {
    try {
      const res = await API.get("integrations/platforms/");
      setIntegrations(res.data);
      setFiltered(res.data);
    } catch (err) {
      console.error(err);
    }
  };

 const handleUpdate = async () => {
  try {
    await API.put(
      `integrations/platforms/${editItem.id}/`,
      editItem
    );

    setEditItem(null);
    fetchIntegrations();

    setSuccessMessage("Integration updated successfully ✅");
    setErrorMessage("");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);

  } catch (err) {
    console.error(err);

    setErrorMessage("❌ Verify your data");
    setSuccessMessage("");

    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  }
};



  return (
    <div className="p-6 max-w-6xl mx-auto">
{successMessage && (
  <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in font-medium">
    {successMessage}
  </div>
)}
{errorMessage && (
  <div className="fixed top-5 right-5 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 font-medium animate-slide">
    {errorMessage}
  </div>
)}
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Integrations</h1>
        <button
          onClick={() => navigate("/integrations/add")}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          + Add Integration
        </button>
      </div>

      {/* SEARCH */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by platform..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 border rounded-lg px-4 py-2"
        />
      </div>

      {/* TABLE */}
      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="p-3">Platform</th>
              <th className="p-3">Client ID</th>
              <th className="p-3">Active</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id} className="border-t text-sm">
                <td className="p-3 font-medium">{item.platform}</td>
                <td className="p-3">{item.client_id}</td>
                <td className="p-3">
                  {item.is_active ? "✅" : "❌"}
                </td>
                <td className="p-3 flex gap-3">
                  <button
                    onClick={() => setSelected(item)}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </button>
                  <button
                    onClick={() => setEditItem(item)}
                    className="text-green-600 hover:underline"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===================== */}
      {/* DEVELOPER STYLE VIEW  */}
      {/* ===================== */}
      {selected && (
        <Modal onClose={() => setSelected(null)}>
          <div className="bg-black text-green-400 font-mono text-xs p-4 rounded-lg max-h-[500px] overflow-auto">
            <div className="flex justify-between mb-3">
              <span>integration.json</span>
              <button
                onClick={() =>
                  navigator.clipboard.writeText(
                    JSON.stringify(selected, null, 2)
                  )
                }
                className="text-white text-xs"
              >
                Copy
              </button>
            </div>
            <pre>
              {JSON.stringify(selected, null, 2)}
            </pre>
          </div>
        </Modal>
      )}

      {/* ===================== */}
      {/* FULL EDIT FORM MODAL  */}
      {/* ===================== */}
      {editItem && (
  <Modal onClose={() => setEditItem(null)}>
    <div className="bg-[#0f172a] text-gray-200 rounded-xl p-6 max-h-[600px] overflow-y-auto shadow-2xl">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-3">
        <h2 className="text-lg font-semibold text-green-400 font-mono">
          Edit Integration
        </h2>
        <span className="text-xs text-gray-400 font-mono">
          ID: {editItem.id}
        </span>
      </div>

      {/* FORM */}
      <div className="space-y-5">

        {[
          { key: "platform", label: "Platform" },
          { key: "client_id", label: "Client ID" },
          { key: "client_secret", label: "Client Secret" },
          { key: "auth_url", label: "Auth URL" },
          { key: "token_url", label: "Token URL" },
          { key: "api_base_url", label: "API Base URL" },
          { key: "webhook_base_url", label: "Webhook Base URL" },
          { key: "webhook_target_url", label: "Webhook Target URL" },
          { key: "redirect_url", label: "Redirect URL" },
        ].map((field) => (
          <div key={field.key} className="flex flex-col">
            <label className="text-xs text-gray-400 mb-1 font-mono">
              {field.label}
            </label>
            <input
              className="bg-[#1e293b] border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-400 font-mono"
              value={editItem[field.key] || ""}
              onChange={(e) =>
                setEditItem({
                  ...editItem,
                  [field.key]: e.target.value,
                })
              }
            />
          </div>
        ))}

        {/* ACTIVE SWITCH */}
        <div className="flex items-center justify-between border-t border-gray-700 pt-4">
          <label className="text-sm font-mono text-gray-400">
            Active Status
          </label>

          <button
            onClick={() =>
              setEditItem({
                ...editItem,
                is_active: !editItem.is_active,
              })
            }
            className={`px-4 py-1 rounded-full text-xs font-mono transition ${
              editItem.is_active
                ? "bg-green-500 text-black"
                : "bg-gray-600 text-white"
            }`}
          >
            {editItem.is_active ? "ACTIVE" : "INACTIVE"}
          </button>
        </div>

        {/* ACTION BUTTON */}
        <button
          onClick={handleUpdate}
          className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-2 rounded-lg transition font-mono"
        >
          Save Changes
        </button>

      </div>
    </div>
  </Modal>
)}

    </div>
  );
};

export default IntegrationList;
