import { User } from './model';

const userDAO = {
  async findByEmail(email) {
    const user = await User.findOne({ email });

    return user;
  },

  async findById(userId) {
    const user = await User.findOne({ _id: userId });

    return user;
  },

  async create(userInfo) {
    const createdNewUser = await User.create(userInfo);

    return createdNewUser;
  },

  async findAll() {
    const users = await User.find({});

    return users;
  },

  async update(email, update) {
    const option = { returnOriginal: false };

    const updatedUser = await User.findOneAndUpdate({ email }, update, option);

    return updatedUser;
  },

  async deleteByEmail(email) {
    const result = await User.deleteOne({ email });

    return result;
  },
};

export { userDAO };
