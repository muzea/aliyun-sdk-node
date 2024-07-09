export interface ResetAccountPasswordRequest {
    /**
     * 实例地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例名称。
     * @example `pxc-htri0ori2r4k9p`
     */
    "DBInstanceName": string;
    /**
     * 账号名称。
     * @example `account`
     */
    "AccountName": string;
    /**
     * 账号密码。
     * @example `*****`
     */
    "AccountPassword": string;
    /**
     * 安全管理员账号。
     * @example `account_sec`
     */
    "SecurityAccountName"?: string;
    /**
     * 安全管理员密码。
     * @example `*****`
     */
    "SecurityAccountPassword"?: string;
}
