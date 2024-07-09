export interface ResetAccountRequest {
    /**
     * 集群ID。
     * @example `pc-**************`
     */
    "DBClusterId": string;
    /**
     * 账号名称。
     * > 仅支持重置高权限账号。
     * @example `testacc`
     */
    "AccountName": string;
    /**
     * 账号密码，密码需满足如下要求：
     * - 大写字母、小写字母、数字、特殊字符至少占三种。
     * - 长度为8~32位。
     * - 特殊字符为`!@#$%^&*()_+-=` 。
     * @example `Pw123456`
     */
    "AccountPassword"?: string;
}
