export default function Test() {
    return <></>;
}

export async function getServerSideProps() {
    return {
        notFound: true,
    };
}
