export interface GetUserMFAInfoRequest {
    /**
     * RAM用户的登录名称。存在以下两种情况：
     * - 当RAM用户调用时，该参数可以为空，为空时默认查询当前RAM用户的多因素认证设备信息。
     * - 当阿里云账号（主账号）调用时，该参数不能为空，必须指定需要查询的RAM用户的登录名称。
     * @example `test@example.onaliyun.com`
     */
    "UserPrincipalName"?: string;
}
