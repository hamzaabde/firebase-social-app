import React, { useState, useEffect } from 'react'

// firebase
import { login } from '@firebase/auth'

// router
import { Redirect, Link } from 'react-router-dom'

export default () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(null)

    const submit = e => {
        e.preventDefault()

        if (loading) return

        setLoading(true)
        setAlert(null)

        login(email, password)
            .then(userCred => {
                if (userCred.user) {
                    console.log(userCred)
                    setLoading(false)
                    setAlert(null)
                }
            })
            .catch(error => {
                setLoading(false)
                setAlert(error.message)
            })
    }

    return (
        <div className="d-flex justify-content-around align-items-center flex-grow-1 w-100 h-100">
            <div className="card w-100" style={{ maxWidth: 350 }}>
                <div className="card-header">
                    <h1 className="text-center fs-4">Login</h1>
                </div>
                <div className="card-body">
                    {alert && (
                        <div className="alert-danger p-1 border border-danger">
                            <p className="text-center mb-0">{alert}</p>
                        </div>
                    )}
                    <form className="form" onSubmit={submit}>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                Enter email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                value={email}
                                onChange={e => {
                                    setEmail(e.target.value)
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">
                                Enter password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                value={password}
                                onChange={e => {
                                    setPassword(e.target.value)
                                }}
                            />
                        </div>
                        <button
                            className="btn btn-primary px-3 mt-2"
                            type="submit"
                        >
                            {loading && (
                                <span
                                    className="spinner-border"
                                    style={{ width: '1rem', height: '1rem' }}
                                ></span>
                            )}
                            <span className={loading && `ms-2`}>login</span>
                        </button>
                    </form>
                </div>
                <div className="card-footer">
                    <p className="mb-0 text-center">
                        Don't have an account? <Link to="/signup">Signup</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
