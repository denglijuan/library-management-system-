import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Information } from 'src/module/books/entities/infoemation.entity';
import { Users } from 'src/module/users/entities/users.entity';

@Entity()
export class Approval {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Information, (Information) => Information.id)
  booksInfomationId: Information;

  @ManyToOne(() => Users, (user) => user.name)
  userId: string;

  @Column('datetime', { name: 'stard_at', comment: '借阅时间' })
  stardAt;

  @Column('datetime', { name: 'end_at', comment: '归还时间' })
  endAt;

  @Column({
    type: 'enum',
    enum: [-1, 0, 1],
    comment: '-1 拒绝，0 审核中，1 通过',
  })
  status: [-1, 0, 1];

  @Column({ length: 200, comment: '描述', nullable: true })
  description: string;

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
