export interface CreateServiceLinkedRoleResponse {
    /**
     * * true：当前账号**已经**创建过服务关联角色
     * * false：当前账号**没有**创建过服务关联角色
     * @example `true`
     */
    AlreadyExists: boolean;
    /**
     * 请求 id
     * @example `XXX-XXX`
     */
    RequestId: string;
}
