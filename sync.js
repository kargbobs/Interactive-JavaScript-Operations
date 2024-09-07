const sequelize = require('./config/database');
const User = require('./models/user');
const Category = require('./models/category');
const PaymentMethod = require('./models/paymentMethod');
const Expense = require('./models/expense');
const Budget = require('./models/budget');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

syncDatabase();
