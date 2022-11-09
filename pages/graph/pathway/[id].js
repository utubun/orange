import { useRouter } from 'next/router';

export default function () {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
        wellcome to the graph #1 {id} page
        </>
    )
}