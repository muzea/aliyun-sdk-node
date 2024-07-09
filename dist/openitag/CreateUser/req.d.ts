export interface CreateUserRequest {
    /**
     * 租户ID。如何获取租户ID，请参见[ListTenants](~~454649~~)。
     * @example `GAR***W134`
     */
    "TenantId": string;
    /**
     * 项目。
     */
    "body"?: {
        /**
         * 当前阿里云账号（主账号）下的RAM用户（子账号）的UID。如何获取UID，请参见[GetUser](~~2330970~~)。
         * @example `166***980757310`
         */
        AccountNo: string;
        /**
         * 账号类型，目前仅开放：ALIYUN。
         * @example `ALIYUN`
         */
        AccountType: string;
        /**
         * 角色。取值如下：
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
