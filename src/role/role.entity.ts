import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
