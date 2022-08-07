import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApprovalModule } from './module/approval/approval.module';
import { BooksModule } from './module/books/books.module';
import { BorrowsModule } from './module/borrows/borrows.module';
import { PermissionsModule } from './module/permissions/permissions.module';
import { RolesModule } from './module/roles/roles.module';
import { UsersModule } from './module/users/users.module';
import { Users } from './module/users/entities/users.entity';
import { Borrows } from './module/borrows/entities/borrows.entity';
import { Classification } from './module/books/entities/classification.entity';
import { Information } from './module/books/entities/infoemation.entity';
import { Permissions } from './module/permissions/entities/permissions.entity';
import { Roles } from './module/roles/entities/roles.entity';
import { Approval } from './module/approval/entities/approval.entity';

@Module({
  imports: [
    ApprovalModule,
    BooksModule,
    BorrowsModule,
    PermissionsModule,
    RolesModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin123',
      database: 'library_management',
      autoLoadEntities: true,
      entities: [
        Users,
        Classification,
        Borrows,
        Permissions,
        Roles,
        Approval,
        Information,
      ],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
