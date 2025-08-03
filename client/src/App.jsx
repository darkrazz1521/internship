import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from './assets/logo.png'
import './App.css'
import { FaUser, FaEnvelope, FaPhone, FaUserTie, FaClipboardList, FaFileAlt } from 'react-icons/fa'

function Home() {
  const navigate = useNavigate()
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Fullscreen gradient background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"></div>
      {/* Overlay for dark effect */}
      <div className="fixed inset-0 z-0 bg-black/30"></div>
      {/* Content above background */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen px-4">
        <img src={logo} alt="Logo" className="w-24 h-24 md:w-32 md:h-32 mb-6 rounded-full shadow-2xl border-4 border-white" />
        <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow mb-4 text-center">
          Welcome to <span className="text-yellow-300">CodeForge</span>
        </h1>
        <p className="text-base md:text-xl text-white/90 mb-8 text-center max-w-xl">
          Your gateway to <span className="font-bold text-blue-200">Internship</span> and <span className="font-bold text-pink-200">Volunteer</span> opportunities.<br />
          <span className="text-white/80">Grow your skills, make an impact, and join our vibrant community!</span>
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-10 w-full max-w-2xl justify-center items-center">
          <button
            className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition"
            onClick={() => navigate('/apply')}
          >
            Apply Now
          </button>
          <button
            className="w-full md:w-auto px-8 py-4 bg-gray-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-gray-800 transition"
            onClick={() => navigate('/admin-login')}
          >
            Admin Login
          </button>
        </div>
        <div className="mt-2 text-white/90 text-center w-full flex flex-col items-center">
          <h2 className="text-lg md:text-2xl font-bold mb-2">Why Choose Us?</h2>
          <ul className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center text-base md:text-lg w-full">
            <li className="bg-white/10 px-4 py-2 rounded-xl">Real-world experience</li>
            <li className="bg-white/10 px-4 py-2 rounded-xl">Flexible roles</li>
            <li className="bg-white/10 px-4 py-2 rounded-xl">Easy application</li>
            <li className="bg-white/10 px-4 py-2 rounded-xl">Track your status</li>
          </ul>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 w-full text-center py-4 text-white/70 text-sm z-10">
        &copy; {new Date().getFullYear()} CodeForge. All rights reserved.
      </footer>
    </div>
  )
}

function RegistrationForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Intern',
    skills: '',
    resume: ''
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }
  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    await fetch('http://localhost:5000/api/applicants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    setLoading(false)
    alert('Application submitted!')
    navigate('/')
  }
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-start bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-2xl bg-white/80 backdrop-blur-lg overflow-hidden max-w-2xl w-full mx-4">
          {/* Left Side */}
          <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
            <img src={logo} alt="Logo" className="w-16 h-16 mb-4 rounded-full shadow-xl border-2 border-white" />
            <h2 className="text-xl md:text-2xl font-extrabold mb-2 text-center">Join CodeForge</h2>
            <p className="text-sm md:text-base text-white/90 mb-2 text-center">
              Apply for <span className="font-bold text-yellow-200">Internship</span> or <span className="font-bold text-pink-200">Volunteer</span> and start your journey!
            </p>
            <ul className="space-y-1 text-xs md:text-sm">
              <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-white rounded-full"></span> Real-world experience</li>
              <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-white rounded-full"></span> Flexible roles</li>
              <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-white rounded-full"></span> Quick application</li>
              <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-white rounded-full"></span> Track your status</li>
            </ul>
          </div>
          {/* Right Side (Form) */}
          <div className="flex items-center justify-center p-4 md:p-8">
            <form className="w-full space-y-4" onSubmit={handleSubmit}>
              <h2 className="text-lg md:text-xl font-bold text-indigo-700 mb-2 text-center">Registration Form</h2>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <input className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm transition" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                <input className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm transition" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                <input className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm transition" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Role</label>
                <select className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm transition" name="role" value={form.role} onChange={handleChange}>
                  <option>Intern</option>
                  <option>Volunteer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Skills/Interest</label>
                <input className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm transition" name="skills" placeholder="Skills/Interest" value={form.skills} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Resume (link or file)</label>
                <input className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm transition" name="resume" placeholder="Resume (link or file)" value={form.resume} onChange={handleChange} />
              </div>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-bold text-base hover:bg-indigo-700 transition duration-200 shadow-lg disabled:opacity-60" type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

function AdminLogin({ setIsAdmin }) {
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    setError('')
  }
  const handleSubmit = e => {
    e.preventDefault()
    // Default credentials
    if (form.username === 'admin' && form.password === '123456') {
      setIsAdmin(true)
      navigate('/admin')
    } else {
      setError('Invalid username or password')
    }
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="rounded-2xl shadow-2xl bg-white/80 backdrop-blur-lg max-w-sm w-full mx-4 p-8 flex flex-col items-center">
          <img src={logo} alt="Logo" className="w-16 h-16 mb-4 rounded-full shadow-xl border-2 border-white" />
          <h2 className="text-2xl font-extrabold text-indigo-700 mb-2 text-center">Admin Login</h2>
          <form className="w-full space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-base font-semibold text-gray-700 mb-1">Username</label>
              <input
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base transition"
                name="username"
                placeholder="Enter admin username"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-base font-semibold text-gray-700 mb-1">Password</label>
              <input
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base transition"
                name="password"
                type="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            {error && <div className="text-red-600 text-sm text-center">{error}</div>}
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-indigo-700 transition duration-200 shadow-lg" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

function AdminView({ setIsAdmin }) {
  const [search, setSearch] = useState('')
  const [applicants, setApplicants] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/api/applicants')
      .then(res => res.json())
      .then(data => setApplicants(data))
  }, [])

  const handleLogout = () => {
    setIsAdmin(false)
  }

  const handleAction = async (id, status) => {
    await fetch(`http://localhost:5000/api/applicants/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    })
    setApplicants(applicants =>
      applicants.map(app =>
        app._id === id ? { ...app, status } : app
      )
    )
  }

  const filtered = applicants.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.role.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-start bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-8 flex-1 flex flex-col">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="w-14 h-14 rounded-full shadow-xl border-2 border-white" />
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-1">Admin Dashboard</h2>
              <p className="text-white/80 text-base">Manage internship & volunteer applications</p>
            </div>
          </div>
          <button
            className="bg-red-600 text-white px-6 py-2 rounded-xl font-semibold shadow hover:bg-red-700 transition"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        <div className="bg-white/90 rounded-2xl shadow-lg p-6 mb-8 flex-1 flex flex-col">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <h3 className="text-xl font-bold text-indigo-700">Applicants</h3>
            <input
              className="border p-2 rounded w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Search by name or role"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="overflow-x-auto flex-1">
            <table className="min-w-full border-collapse bg-white rounded-xl shadow">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="border p-3 text-left">Name</th>
                  <th className="border p-3 text-left">Email</th>
                  <th className="border p-3 text-left">Role</th>
                  <th className="border p-3 text-left">Resume</th>
                  <th className="border p-3 text-left">Status</th>
                  <th className="border p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center p-6 text-gray-500">No applicants found.</td>
                  </tr>
                ) : (
                  filtered.map((a, i) => (
                    <tr key={a._id || i} className="hover:bg-indigo-50 transition">
                      <td className="border p-3">{a.name}</td>
                      <td className="border p-3">{a.email}</td>
                      <td className="border p-3">{a.role}</td>
                      <td className="border p-3">
                        {a.resume ? <a href={a.resume} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Link</a> : '—'}
                      </td>
                      <td className="border p-3 font-semibold">
                        <span className={
                          a.status === 'Accepted' ? 'text-green-600' :
                          a.status === 'Rejected' ? 'text-red-600' :
                          'text-yellow-600'
                        }>
                          {a.status || 'Pending'}
                        </span>
                      </td>
                      <td className="border p-3 flex gap-2">
                        <button
                          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition disabled:opacity-50"
                          onClick={() => handleAction(a._id, 'Accepted')}
                          disabled={a.status === 'Accepted'}
                        >
                          Accept
                        </button>
                        <button
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition disabled:opacity-50"
                          onClick={() => handleAction(a._id, 'Rejected')}
                          disabled={a.status === 'Rejected'}
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        <footer className="text-center text-white/70 text-sm mt-8">
          &copy; {new Date().getFullYear()} CodeForge Admin. All rights reserved.
        </footer>
      </div>
    </div>
  )
}

function App() {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apply" element={<RegistrationForm />} />
      <Route
        path="/admin-login"
        element={<AdminLogin setIsAdmin={setIsAdmin} />}
      />
      <Route
        path="/admin"
        element={
          isAdmin ? (
            <AdminView setIsAdmin={setIsAdmin} />
          ) : (
            <AdminLogin setIsAdmin={setIsAdmin} />
          )
        }
      />
    </Routes>
  )
}

export default App
