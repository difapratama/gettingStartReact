import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Pekerjaan</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{index}</td>
                <td>{row.name}</td>
                <td>{row.pekerjaan}</td>
                <td><button onClick={() => props.removeCharacter(index)}>DELETE</button></td>
            </tr>
        );
    });
    return (
        <tbody>{rows}</tbody>
    )
}

class Table extends Component {
    render() {
        const { characterData,removeCharacter } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody
                    characterData={characterData}
                    removeCharacter={removeCharacter} />
            </table>
        );
    }
}

export default Table;