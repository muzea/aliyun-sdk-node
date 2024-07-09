export interface DeleteUserRequest {
    /**
     * 租户id，可以通过ListTenantId租户列表查询的API来查询。
     * @example `GAR***W134`
     */
    "TenantId": string;
    /**
     * 用户id
     * @example `166***980757311`
     */
    "UserId": string;
}
