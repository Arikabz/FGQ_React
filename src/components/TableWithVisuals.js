import React from 'react'

const Entry = (props) => {
    return (
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={props.AwayLogo} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{props.Away}</div>
                            <div className="text-sm opacity-50">{props.result}</div>
                        </div>
                    </div>
                </td>
                <td>
                    Zemlak, Daniel and Leannon
                    <br/>
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Purple</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        )
}

const TableWithVisuals = (props) => {
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Home</th>
                        <th>Away</th>
                        <th>Something</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <Entry />
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Home</th>
                        <th>Away</th>
                        <th>Something</th>
                        <th></th>
                    </tr>
                </tfoot>

            </table>
        </div>
    )
}

export default TableWithVisuals
