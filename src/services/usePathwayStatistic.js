import { useReadCypher } from "use-neo4j";
import Loading from "../components/Loading";
import Error from   "../components/Error";

const usePathwayStatistic = (id) => {

    /*const { error, loading, result, records } = useReadCypher(
        `MATCH (:Pathway { id: $id })--(m:Module)--(r:Reaction)--(c:Compound)
         RETURN 
           count(DISTINCT m) AS modules
           count(DISTINCT r) AS reactions
           count(DISTINCT c) AS compounds
        `,
        { id: id }
    );*/

    /*const [ loading, error ] = false;
    const result = true;

    if (loading) {
        return <Loading />
    } else if (error) {
        return <Error />
    } else if (result) {
        console.log(result)
    }*/

    return [ 
        { key: 'modules', label: 'Modules', value:  100 },
        { key: 'reactions', label: 'Reactions', value: 200 },
        { key: 'compounds', label: 'Compounds', value: 400 }
    ];
};

export default usePathwayStatistic;