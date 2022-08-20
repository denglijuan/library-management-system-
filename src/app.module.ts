import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './module/auth/auth.module';
import { ApprovalModule } from './module/approval/approval.module';
import { BooksModule } from './module/books/books.module';
import { BorrowsModule } from './module/borrows/borrows.module';
import { PermissionsModule } from './module/permissions/permissions.module';
import { RolesModule } from './module/roles/roles.module';
import { UsersModule } from './module/users/users.module';
// import { EmailModule } from './module/email/email.module';
// import { UtilsModule } from './module/utils/utils.module';
import { Users } from './module/users/users.entity';
import { Borrows } from './module/borrows/borrows.entity';
import { Classification } from './module/books/classification/classification.entity';
import { Information } from './module/books/classification/information.entity';
import { Permissions } from './module/permissions/permissions.entity';
import { Roles } from './module/roles/roles.entity';
import { Approval } from './module/approval/approval.entity';

@Module({
  // 导入其他模块中导出的 Providers, 以实现共享
  imports: [
    AuthModule,
    ApprovalModule,
    BooksModule,
    BorrowsModule,
    PermissionsModule,
    RolesModule,
    UsersModule,
    // UtilsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '10.49.173.21',
      port: 8636,
      username: 'root',
      password: 'tanghui315',
      database: 'denglijuan',
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
