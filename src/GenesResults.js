function GenesResults({ data, selected }) {

    return (
        <div>
            <h2>Results</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Genes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.organisms
                          .filter(org => (
                            selected === 'All' ? true : org.name === selected
                            )
                          )
                          .map((org, i) => (
                            <tr key={i}>
                                <td>{ org.id }</td>
                                <td>{ org.name }</td>
                                <td>
                                    {
                                        org.genes.map((gene) => gene.name)
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default GenesResults;