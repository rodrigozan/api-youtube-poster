import User, { User as UserModel } from './user.model';

class UserService {
  async createUser(user: UserModel): Promise<UserModel> {
    return await User.create(user);
  }

  async getAllUsers(): Promise<UserModel[]> {
    return await User.find();
  }

  async getUserById(id: string): Promise<UserModel | null> {
    return await User.findById(id);
  }

  async updateUser(id: string, user: UserModel): Promise<UserModel | null> {
    return await User.findByIdAndUpdate(id, user, { new: true });
  }

  async deleteUser(id: string): Promise<void> {
    await User.findByIdAndDelete(id);
  }
}

export default new UserService();
