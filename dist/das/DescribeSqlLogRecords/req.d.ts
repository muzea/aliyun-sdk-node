export interface DescribeSqlLogRecordsRequest {
    /**
     * 数据库实例ID。
     * @example `pc-2ze8g2am97624****
    `
     */
    "InstanceId": string;
    /**
     * 节点ID。
     * - 对于RDS MySQL和PolarDB MySQL版，该参数仅适用于集群版实例。若不传该参数，默认查询主节点日志明细。
     * - 对于PolarDB-X 2.0，该参数传入**polarx_cn**（计算节点）或**polarx_dn**（数据节点）。
     * @example `pi-uf6k5f6g3912i****`
     */
    "NodeId"?: string;
    /**
     * PolarDB-X 2.0数据库实例节点的角色。
     * - **polarx_cn **：计算节点。
     * - **polarx_dn **：数据节点。
     * @example `polarx_cn `
     */
    "Role"?: string;
    /**
     * 筛选条件列表。
     */
    "Filters"?: {
        /**
         * 过滤参数。
         * > 支持的过滤参数及其取值请参考**请求参数补充说明**。
         * @example `keyWords`
         */
        Key: string;
        /**
         * 过滤参数取值。
         * @example `select`
         */
        Value: string;
    }[];
    /**
     * 开始时间，格式为Unix时间戳，单位为毫秒。
     * @example `1596177993000`
     */
    "StartTime"?: number;
    /**
     * 结束时间，格式为Unix时间戳，单位为毫秒。
     * @example `1608888296000`
     */
    "EndTime"?: number;
    /**
     * 分页查询的页码，从1开始，默认为1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页最大记录数，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
}
