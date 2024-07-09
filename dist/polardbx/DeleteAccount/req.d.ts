export interface DeleteAccountRequest {
    /**
     * 实例名。
     * @example `pxc-*********`
     */
    "DBInstanceName": string;
    /**
     * 删除的账号名。
     * @example `testaccount`
     */
    "AccountName": string;
    /**
     * 实例所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 安全管理员账号名称。
     * > 若已开启三权分立模式，该参数必填，未开启三权分立可以不填。
     * @example `securityAccount`
     */
    "SecurityAccountName"?: string;
    /**
     * 安全管理员账号密码。
     * > 若已开启三权分立模式，该参数必填，未开启三权分立可以不填。
     * @example `securityPassword`
     */
    "SecurityAccountPassword"?: string;
}
