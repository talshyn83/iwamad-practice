import { Card } from '../components/ui/Card';

export function RegisterPage() {
  return (
    <Card>
      <h1 style={{ textAlign: 'center', marginBottom: '24px', marginTop: 0 }}>Register</h1>
      <form className="form-group" onSubmit={(e) => e.preventDefault()}>
        
        <div className="form-control">
          <label>Full Name</label>
          <input type="text" />
        </div>
        
        <div className="form-control">
          <label>Email</label>
          <input type="email" />
        </div>
        
        <div className="form-control">
          <label>Password</label>
          <input type="password" />
        </div>
        
        <div className="form-control">
          <label>Confirm Password</label>
          <input type="password" />
        </div>
        
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '8px' }}>
          <input type="checkbox" id="terms" style={{ width: '18px', height: '18px' }} />
          <label htmlFor="terms" style={{ fontSize: '0.9rem' }}>Accept terms and conditions</label>
        </div>
        
        <button type="submit" className="btn" style={{ marginTop: '16px' }}>
          Create account
        </button>

      </form>
    </Card>
  );
}