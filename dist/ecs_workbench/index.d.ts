import { LoginInstanceRequest } from "./LoginInstance/req";
import { LoginInstanceResponse } from "./LoginInstance/res";

interface ECS_WORKBENCH {
    /**
     * 登录ECS实例，使用此API可以登录ECS实例。
     */
    LoginInstance(query: LoginInstanceRequest): Promise<LoginInstanceResponse>;
}
export default ECS_WORKBENCH;
