import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { CustomerRepository } from '../infra/typeorm/repositories/CustomersRepository';

interface IRquest {
  id: string;
}
class DeleteCustomerService {
  public async execute({ id }: IRquest): Promise<void> {
    const customersRepository = getCustomRepository(CustomerRepository);

    const customer = await customersRepository.findById(id);

    if (!customer) {
      throw new AppError('User not found');
    }

    await customersRepository.remove(customer);
  }
}

export default DeleteCustomerService;
