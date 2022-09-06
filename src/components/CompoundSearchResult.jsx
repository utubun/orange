function CompoundResults({ data, selected }) {

    return (
        <div>
            <h2>Results</h2>
            <table>
                <caption>All compounds found in KEGG database</caption>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Alternative names</th>
                        <th>Chebi</th>
                        <th>PubChem</th>
                        <th>Reactions</th>
                        <th>Modules</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.compounds
                          .filter(compound => (
                            selected === '' ? true : compound.name === selected
                            )
                          )
                          .map((compound, i) => (
                            <tr key={i}>
                                <td>{ compound.id }</td>
                                <td>{ compound.name }</td>
                                <td>
                                    {
                                        compound.alt ? compound.alt.join('; ') : ''
                                    }
                                </td>
                                <td>
                                    {
                                        compound.chebi ? compound.chebi.join(', ') : ''
                                    }
                                </td>
                                <td>
                                    {
                                        compound.pubchem ? compound.pubchem.join(', ') : ''
                                    }
                                </td>                                  
                                <td>
                                    {
                                        compound.reaction.map((rct) => rct.equation).join(';\n ') 
                                    }
                                </td>
                                <td>
                                    {
                                        compound.module.map((mdl) => mdl.id).join('; ')
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

export default CompoundResults;