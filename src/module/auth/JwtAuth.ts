import { ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export class JwtAuth extends AuthGuard('jwt') {
  // 全局jwt和jwt白名单逻辑
  private reflector;
  constructor(reflector) {
    super();
    this.reflector = reflector;
  }
  canActivate(context: ExecutionContext) {
    const roles = this.reflector.get('whiteList', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (roles) return true;
    return super.canActivate(context);
  }
}
