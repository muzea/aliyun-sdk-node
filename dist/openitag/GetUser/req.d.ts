export interface GetUserRequest {
    /**
     * 租户ID。如何获取租户ID，请参见[ListTenants](~~454649~~)。
     * @example `GA***W134`
     */
    "TenantId": string;
    /**
     * 用户ID。如何查询用户ID，请参见[ListUsers](~~454688~~)。
     * @example `166***9980757311`
     */
    "UserId": number;
}
