export default function Page({ params} : {
    params: { id: string}
}) {
    return <h1>Blog {params.id}</h1>
}