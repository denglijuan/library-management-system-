import { Users } from 'src/module/users/entities/users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Classification } from '../../classification/entities/classification.entity';

@Entity()
export class Information {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Users, (users) => users.id)
  userId: number;

  @Column({ length: 13, comment: '图书ISBN' })
  ISBN: number;

  @Column({ length: 50, comment: '图书名称' })
  name: string;

  @ManyToMany(() => Classification)
  type: Classification[];

  @Column({ nullable: true, comment: '图书定价' })
  price: number;

  @Column({ length: 50, nullable: true, comment: '图书副标题' })
  subtitle: string;

  @Column({ length: 32, nullable: true, comment: '出版社' })
  press: string;

  @Column({ length: 200, nullable: true, comment: '简介' })
  summary: string;

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
