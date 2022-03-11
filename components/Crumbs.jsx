import Breadcrumbs from 'nextjs-breadcrumbs'

export const Crumbs = () => (
  <Breadcrumbs
    containerStyle={{ fontSize: 10, display: 'flex', gap: 0, marginTop: 16 }}
    listStyle={{ display: 'flex', gap: 4 }}
    rootLabel="Home"
    transformLabel={(title) => {
      return title + ' /'
    }}
  />
)
