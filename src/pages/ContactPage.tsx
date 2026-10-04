export default function ContactPage() {
  return (
    <div className="page-container">
      <h2>Связаться со мной</h2>
      <ul style={{ listStyleType: 'none', padding: 0, lineHeight: '2' }}>
        <li><strong>Email:</strong> <a href="mailto:t_saparkhan@kbtu.kz" style={{ color: '#646cff' }}>t_saparkhan@kbtu.kz</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/talshyn83" style={{ color: '#646cff' }} target="_blank">github.com/talshyn83</a></li>
      </ul>
    </div>
  );
}