import React, { useState } from 'react'

// hooks
import useMediaQuery from '@hooks/useMediaQuery'

// icons
import { BsSearch } from 'react-icons/bs'

const Row = ({ children }) => (
    <div className="row align-items-center py-3 gap-2 bg-dark">{children}</div>
)

export default () => {
    const medium = useMediaQuery('(min-width: 580px)')
    const large = useMediaQuery('(min-width: 880px)')

    const [search, setSearch] = useState('')

    // large screen
    if (large)
        return (
            <Row>
                <div className="col-4 ">
                    <h1 className="fs-4 fw-bold mb-0 text-white">BubbleMesh</h1>
                </div>
                <div className="col">
                    <form className="form">
                        <div className="form-group">
                            <div className="input-group">
                                <label
                                    htmlFor="search"
                                    className="input-group-text"
                                >
                                    <BsSearch />
                                </label>
                                <input
                                    type="search"
                                    id="search"
                                    className="form-control"
                                    autoComplete="search"
                                    value={search}
                                    onChange={e => {
                                        setSearch(e.target.value)
                                    }}
                                />
                                <button className="btn btn-outline-info">
                                    search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </Row>
        )

    // medium screen
    // if (large) return div

    // small screen
    // return div
}
