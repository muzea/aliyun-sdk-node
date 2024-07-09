export interface ModifyAccountPrivilegeRequest {
    /**
     * 实例ID。
     * @example `drdshbgaen89****`
     */
    "DrdsInstanceId": string;
    /**
     * 账号名称。
     * @example `account_sec`
     */
    "AccountName": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据库权限列表。
     */
    "DbPrivilege"?: {
        /**
         * 数据库名称。
         * @example `test123`
         */
        DbName: string;
        /**
         * 账号权限。
         * @example `ReadWrite`
         */
        Privilege: string;
    }[];
}
