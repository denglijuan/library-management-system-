import { Roles } from 'src/module/roles/roles.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryColumn()
  username: string;

  @Column({ comment: '密码' })
  password: string;

  @ManyToOne(() => Roles, (roles) => roles.name)
  role: string;

  @Column({ comment: '电话', nullable: true })
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
