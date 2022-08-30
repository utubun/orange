function GenesResults({ data, selected }) {

    return (
        <div>
            <h2>Results</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Alternative names</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.genes
                          .filter(gene => (
                            selected === 'All' ? true : gene.name === selected
                            )
                          )
                          .map((gene, i) => (
                            <tr key={i}>
                                <td>{ gene.id }</td>
                                <td>{ gene.name }</td>
                                <td>
                                    {
                                        gene.alt.join('; ')
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