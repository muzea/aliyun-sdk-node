export interface ConnectDatabaseRequest {
    /**
     * 网关ID。
     * @example `dg-58c36y906675****`
     */
    "GatewayId": string;
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
     * @example `test_usr
    `
     */
    "DbUserName"?: string;
    /**
     * 访问数据库所用的密码。
     * @example `1234!2#%A****
    `
     */
    "DbPassword"?: string;
    /**
     * 数据库名称。
     * @example `test`
     */
    "DbName"?: string;
}
