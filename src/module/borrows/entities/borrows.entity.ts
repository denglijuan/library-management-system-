import { Information } from 'src/module/books/entities/infoemation.entity';
import { Users } from 'src/module/users/entities/users.entity';
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
export class Borrows {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Users, (users) => users.name)
  userId: string;

  @ManyToOne(() => Information, (Information) => Information.id)
  informationId: Information;

  @Column({ type: 'enum', enum: [0, 1, 2] })
  status: [0, 1, 2];

  @Column('datetime', { name: 'stard_at', comment: '借阅时间' })
  stardAt;

  @Column('datetime', { name: 'end_at', comment: '归还时间' })
  endAt;

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
