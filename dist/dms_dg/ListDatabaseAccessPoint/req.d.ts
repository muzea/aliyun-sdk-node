export interface ListDatabaseAccessPointRequest {
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
     * 数据库实例ID。
     * @example `dg-db-n2a285spnpy3****`
     */
    "DbInstanceId"?: string;
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
    /**
     * 用户数据库访问点所在VPC的ID。
     * @example `vpc-wz9c473cmu2gg7i7l****`
     */
    "VpcId"?: string;
}
