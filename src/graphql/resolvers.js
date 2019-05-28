export default {
    Query: {
        hello: () => 'World',
        getLaunch: (_, { id }, { dataSources }) => dataSources.Launch.getLaunch(id),
        getLaunches: (_, args, { dataSources }) => dataSources.Launch.getLaunches(),
        getRocket: (_, { id }, { dataSources }) => dataSources.Rocket.getRocket(id),
        getRockets: (_, args, { dataSources }) =>  dataSources.Rocket.getRockets()
    }
}