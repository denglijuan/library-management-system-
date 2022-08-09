import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './module/auth/auth.module';
import { ApprovalModule } from './module/approval/approval.module';
import { BooksModule } from './module/books/books.module';
import { BorrowsModule } from './module/borrows/borrows.module';
import { LoginModule } from './module/login/login.module';
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
  // 导入其他模块中导出的 Providers, 以实现共享
  imports: [
    AuthModule,
    ApprovalModule,
    BooksModule,
    BorrowsModule,
    LoginModule,
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

  // 模块中所有用到的功能类，模块内共享实用
  providers: [],

  // 导出其他模块需要共享的 Providers
  exports: [],
})
export class AppModule {}
