module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '27f631888a7207fd181ccb0592cc33b2'),
  },
});
