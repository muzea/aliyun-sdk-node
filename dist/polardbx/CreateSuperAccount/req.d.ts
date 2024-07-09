export interface CreateSuperAccountRequest {
    /**
     * 实例所在地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例名。
     * @example `pxc-************`
     */
    "DBInstanceName": string;
    /**
     * 账号名。
     * @example `dba`
     */
    "AccountName": string;
    /**
     * 账号密码。
     * @example `testdbapassword`
     */
    "AccountPassword": string;
    /**
     * 账号描述。
     * @example `testdbadescription`
     */
    "AccountDescription"?: string;
}
