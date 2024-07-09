export interface ModifyAccountDescriptionRequest {
    /**
     * 实例所属地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例名称。
     * @example `pxc-hzjasd****`
     */
    "DBInstanceName": string;
    /**
     * 实例账号名称。
     * @example `account`
     */
    "AccountName": string;
    /**
     * 账号描述。
     * @example `测试账号`
     */
    "AccountDescription"?: string;
}
