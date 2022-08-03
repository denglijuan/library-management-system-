import { Roles } from 'src/module/roles/entities/roles.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 20, comment: '名称' })
  name: string;

  @ManyToOne(() => Roles, (roles) => roles.name)
  role: string;

  @Column({ length: 11, comment: '电话', nullable: true })
  phone: number;

  @Column({ length: 40, comment: '邮箱', nullable: true })
  email: string;

  @Column({ comment: '状态', nullable: true })
  status: boolean;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    comment: '创建时间',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    comment: '更新时间',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    name: 'delete_at',
    comment: '删除时间',
  })
  deleteAt: Date;
}
