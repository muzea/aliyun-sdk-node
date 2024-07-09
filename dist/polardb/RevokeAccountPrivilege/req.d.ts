export interface RevokeAccountPrivilegeRequest {
    /**
     * 集群ID。
     * @example `pc-****************`
     */
    "DBClusterId": string;
    /**
     * 账号名称。
     * > 仅支持普通账号，不支持高权限账号。
     * @example `testacc`
     */
    "AccountName": string;
    /**
     * 数据库名称。支持同时传入多个数据库，多个数据库名称之间用英文逗号（,）分隔。
     * @example `testdb`
     */
    "DBName": string;
}
