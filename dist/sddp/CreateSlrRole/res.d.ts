export interface CreateSlrRoleResponse {
    /**
     * 服务关联角色是否创建成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    HasPermission: boolean;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `208B016D-4CB9-4A85-96A5-0B8ED1EBF271`
     */
    RequestId: string;
}
