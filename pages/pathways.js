import Head from 'next/head';
import PathwayCard from '../components/PathwayCard';

const title = "Pathways";

const pathwaylist = [
    "id1",
    "id2",
    "id3"
];

const pathwaysRendered = pathwaylist.map(path => (
    PathwayCard()
))

const pathways = () => {
    return (
      <div>
        <Head>
          <title>Pathways | xNet</title>
        </Head>
        {pathwaysRendered}
      </div>
    )
}

export default pathways