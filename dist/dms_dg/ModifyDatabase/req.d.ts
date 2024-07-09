export interface ModifyDatabaseRequest {
    /**
     * 通过网关所在宿主机去访问数据库的地址。
     * @example `127.0.XX.XX`
     */
    "Host": string;
    /**
     * 通过网关所在宿主机去访问数据库的端口。
     * @example `3306`
     */
    "Port": number;
    /**
     * 数据库类型。
     * @example `MYSQL`
     */
    "DbType"?: string;
    /**
     * 访问数据库所用的用户名。
     * @example `test`
     */
    "DbUserName"?: string;
    /**
     * 访问数据库所用的密码。
     * @example `817130****`
     */
    "DbPassword"?: string;
    /**
     * 数据库描述。
     * @example `测试库`
     */
    "DbDescription"?: string;
    /**
     * 数据库实例ID。
     * @example `dg-db-n2a285spnpy3****
    `
     */
    "InstanceId": string;
    /**
     * 数据库名称。
     * @example `test`
     */
    "DbName"?: string;
}
