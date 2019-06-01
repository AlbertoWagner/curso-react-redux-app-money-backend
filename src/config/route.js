const express = require('express')


module.exports = function (server) {
    // Url bases
    const router = express.Router()
    server.use('/api', router)

    // Rotas de Ciclo de Pagamento 
    const BillingCycle = require('../api/BillingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}