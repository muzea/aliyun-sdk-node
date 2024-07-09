export interface DeleteAccountRequest {
    /**
     * 实例ID。
     * @example `rm-uf6wjk5xxxxxxxxxx`
     */
    "DBClusterId": string;
    /**
     * 数据库账号名。
     * @example `test_accout`
     */
    "AccountName": string;
    /**
     * - Normal：普通账号。
     * - Super：高权限账号。
     * @example `Normal`
     */
    "AccountType"?: string;
}
