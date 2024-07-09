export interface CreateRdsPostgreSQLDataSourceRequest {
    /**
     * 数据源的名称。
     * @example `data_name`
     */
    "Name": string;
    /**
     * 数据库实例的 ID。
     * @example `g_abcdefj***
    `
     */
    "InstanceId": string;
    /**
     * 数据库的名称。
     * @example `db_name`
     */
    "DatabaseName": string;
    /**
     * 数据库用户的名称。
     * @example `user_name`
     */
    "UserName": string;
    /**
     * 数据库用户的密码，需要使用 Base64 编码。
     * @example `cGFzc193b3JK`
     */
    "Password": string;
    /**
     * 自定义描述信息。
     * @example `this is a test database`
     */
    "Description"?: string;
}
