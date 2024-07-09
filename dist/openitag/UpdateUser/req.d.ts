export interface UpdateUserRequest {
    /**
     * 租户ID。如何获取租户ID，请参见[ListTenants](~~454649~~)。
     * @example `GA**W134`
     */
    "TenantId": string;
    /**
     * 用户ID。如何查询用户ID，请参见[ListUsers](~~454688~~)。
     * @example `166***80757311`
     */
    "UserId": string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 角色。可能值：
         * - OPERATOR：标注员。
         * - ADMIN：管理员。
         * - LEADER：标注组长。
         * @example `ADMIN`
         */
        Role: string;
        /**
         * 用户名。
         * @example `user1`
         */
        UserName: string;
    };
}
