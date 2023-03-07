import { Injectable } from '@nestjs/common';
import { Permission } from './permission.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,
  ) {}

  async all(): Promise<Permission[]> {
    return this.permissionRepository.find();
  }
}
