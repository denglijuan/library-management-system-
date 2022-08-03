import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Classification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 10, comment: '类型' })
  type: string;

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
