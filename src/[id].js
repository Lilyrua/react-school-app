export default function Activity ({ activity }){
 return(
    <div>
        {activity.attributes.name}
    </div>
 )
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:1337/api/activities?populate=cover_image')
    const activitys = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = activitys.map((activity) => ({
      params: { id: string(activity.id) },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`http://localhost:1337/api/activities?populate=cover_image/${params.id}`)
    const activity = await res.json()
  
    // Pass post data to the page via props
    return { props: { activity } }
  }