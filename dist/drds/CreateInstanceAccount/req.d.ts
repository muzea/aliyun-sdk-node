export interface CreateInstanceAccountRequest {
    /**
     * 实例ID。
     * @example `drdsjiii1b49****`
     */
    "DrdsInstanceId": string;
    /**
     * 账号名称。
     * @example `drds_sample_account`
     */
    "AccountName": string;
    /**
     * 账号密码。
     * @example `drds_sample_password`
     */
    "Password": string;
    /**
     * 数据库访问权限列表。
     */
    "DbPrivilege": {
        /**
         * 数据库名称。
         * @example `test123`
         */
        DbName: string;
        /**
         * 需要创建的账号对数据库的访问权限。
         * @example `DDL`
         */
        Privilege: string;
    }[];
}
