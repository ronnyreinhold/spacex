export default {
    Query: {
        hello: () => 'World',
        getLaunch: (_, { id }, { dataSources }) => { return dataSources.Launch.getLaunch(id) },
        getLaunches: (_, args, { dataSources }) => { return dataSources.Launch.getLaunches() },
        getRocket: (_, { id }, { dataSources }) => { return dataSources.Rocket.getRocket(id) },
        getRockets: (_, args, { dataSources }) => { return dataSources.Rocket.getRockets() }
    }
}