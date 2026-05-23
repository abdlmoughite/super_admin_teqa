import API from "../../Auth/Api";
import { useState } from "react";


const IntegrationAdd = () => {
  const [form, setForm] = useState({
    platform: "",
    client_id: "",
    client_secret: "",
    auth_url: "",
    token_url: "",
    api_base_url: "",
    webhook_base_url: "",
    webhook_target_url: "",
    redirect_url: "",
    scopesText: "*", 
    is_active: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    // convert scopesText -> scopes array
    const scopes = form.scopesText
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const data = {
      platform: form.platform,
      client_id: form.client_id,
      client_secret: form.client_secret,
      auth_url: form.auth_url,
      token_url: form.token_url,
      api_base_url: form.api_base_url,
      webhook_base_url: form.webhook_base_url,
      webhook_target_url: form.webhook_target_url,
      redirect_url: form.redirect_url,
      scopes: scopes.length ? scopes : ["*"],
      is_active: form.is_active,
    };

    try {
      const response = await API.post("integrations/platforms/", data);
      setSuccess("Integration created successfully ✅");
      setForm({
                  platform: "",
                  client_id: "",
                  client_secret: "",
                  auth_url: "",
                  token_url: "",
                  api_base_url: "",
                  webhook_base_url: "",
                  webhook_target_url: "",
                  redirect_url: "",
                  scopesText: "*",
                  is_active: true,
                });
    } catch (err) {
      // Axios error friendly message
      if(err.response.status ==400 || err.response.status == 422 || err.response.status == 403 || err.response.status == 401 ){
        setError("Please check your input data. It seems some fields are missing or incorrect.");
        setSuccess("");
        setLoading(false);
        return;
      }
      const msg =
        err?.response?.data?.detail ||
        err?.response?.data?.message ||
        err?.message ||
        "Something went wrong";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const Field = ({ label, name, placeholder, type = "text" }) => (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={form[name]}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
      />
    </div>
  );

  return (
    <div className="mx-auto max-w-3xl p-4">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h1 className="text-xl font-semibold">Add Integration</h1>
          <p className="text-sm text-gray-500">
            Fill the platform OAuth + webhook settings then submit.
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            {success}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-6">
          {/* Basic */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
Platform
      </label>
      <input
        type="text"
        name="platform"
        value={form.platform}
        onChange={onChange}
        placeholder="youcan , shopify ..."
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
      />
    </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Active
              </label>
              <div className="flex items-center gap-3 rounded-lg border border-gray-300 px-3 py-2">
                <input
                  type="checkbox"
                  name="is_active"
                  checked={form.is_active}
                  onChange={onChange}
                  className="h-4 w-4"
                />
                <span className="text-sm text-gray-700">
                  {form.is_active ? "Enabled" : "Disabled"}
                </span>
              </div>
            </div>

                <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
Client
      </label>
      <input
        type="text"
        name="client_id"
        value={form.client_id}
        onChange={onChange}
        placeholder="Client ID"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
      />
    </div>

                <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
Client Secret
      </label>
      <input
        type="text"
        name="client_secret"
        value={form.client_secret}
        onChange={onChange}
        placeholder="********"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
      />
    </div>
            
          </div>

          {/* URLs */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
Auth URL
      </label>
      <input
        type="text"
        name="auth_url"
        value={form.auth_url}
        onChange={onChange}
        placeholder="Auth URL"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
      />
    </div>

                            <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
Token URL
      </label>
      <input
        type="text"
        name="token_url"
        value={form.token_url}
        onChange={onChange}
        placeholder="Token URL"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
      />
    </div>
                <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
API Base URL
      </label>
      <input
        type="text"
        name="api_base_url"
        value={form.api_base_url}
        onChange={onChange}
        placeholder="API Base URL"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
      />
    </div>
                            <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
Webhook Base URL
      </label>
      <input
        type="text"
        name="webhook_base_url"
        value={form.webhook_base_url}
        onChange={onChange}
        placeholder="Webhook Base URL"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
      />
    </div>
                            <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
Webhook Target URL
      </label>
      <input
        type="text"
        name="webhook_target_url"
        value={form.webhook_target_url}
        onChange={onChange}
        placeholder="Webhook Target URL"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
      />
    </div>

                            <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
Redirect URL
      </label>
      <input
        type="text"
        name="redirect_url"
        value={form.redirect_url}
        onChange={onChange}
        placeholder="Redirect URL"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
      />
    </div>
          </div>

          {/* Scopes */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Scopes (comma separated)
            </label>
            <input
              type="text"
              name="scopesText"
              value={form.scopesText}
              onChange={onChange}
              placeholder="*  or  read_orders,write_orders"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => {
                setError("");
                setSuccess("");
                setForm({
                  platform: "",
                  client_id: "",
                  client_secret: "",
                  auth_url: "",
                  token_url: "",
                  api_base_url: "",
                  webhook_base_url: "",
                  webhook_target_url: "",
                  redirect_url: "",
                  scopesText: "*",
                  is_active: true,
                });
              }}
              className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50"
              disabled={loading}
            >
              Clear
            </button>

            <button
              type="submit"
              className="rounded-lg bg-black px-4 py-2 text-sm text-white hover:opacity-90 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Saving..." : "Create Integration"}
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default IntegrationAdd;