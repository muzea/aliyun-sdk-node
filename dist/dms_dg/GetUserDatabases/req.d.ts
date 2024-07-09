export interface GetUserDatabasesRequest {
    /**
     * 网关ID。
     * @example `dg-nmz841r7b681****`
     */
    "GatewayId"?: string;
    /**
     * 分页大小。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 当前页码。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 搜索关键字。
     * @example `网关。`
     */
    "SearchKey"?: string;
    /**
     * 数据库类型。
     * @example `MYSQL
    `
     */
    "DbType"?: string;
    /**
     * 数据库实例ID。
     * @example `db-22h1qa9d452f****
    `
     */
    "InstanceId"?: string;
    /**
     * 网关所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 通过网关所在宿主机去访问数据库的地址。
     * @example `127.0.XX.XX`
     */
    "Host"?: string;
    /**
     * 通过网关所在宿主机去访问数据库的端口。
     * @example `3306`
     */
    "Port"?: number;
}
