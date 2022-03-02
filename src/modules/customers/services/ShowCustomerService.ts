import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Customer from '../infra/typeorm/entities/Customer';
import { CustomerRepository } from '../infra/typeorm/repositories/CustomersRepository';

interface IRquest {
  id: string;
}
class ShowCustomerService {
  public async execute({ id }: IRquest): Promise<Customer> {
    const customersRepository = getCustomRepository(CustomerRepository);

    const customer = await customersRepository.findById(id);

    if (!customer) {
      throw new AppError('User not found');
    }

    return customer;
  }
}

export default ShowCustomerService;
