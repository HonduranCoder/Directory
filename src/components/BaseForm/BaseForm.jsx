export default function BaseForm({
  handleSubmit,
  email,
  label,
  setEmail,
  password,
  setPassword,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <section>
        <label>
          Email
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </section>
      <section>
        <label>
          Password
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </section>
      <button type="submit">{label}</button>
    </form>
  );
}
