import * as bcrypt from 'bcrypt';

export const hashPassword = async (plainPassword: string) => {
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(plainPassword, salt);
};

export const comparePassword = async (plainPassword: string, hash: string) => {
  return await bcrypt.compare(plainPassword, hash);
};
