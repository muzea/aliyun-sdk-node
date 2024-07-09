export interface DisableRightsSeparationRequest {
    /**
     * 实例所属地域ID。
     * @example `cn-hanghzou`
     */
    "RegionId": string;
    /**
     * 数据库实例名称。
     * @example `pxc-sprcym7g7w****`
     */
    "DBInstanceName": string;
    /**
     * dba账号名称。
     * @example `account_1`
     */
    "DbaAccountName": string;
    /**
     * dba账号密码。
     * @example `*****`
     */
    "DbaAccountPassword": string;
}
