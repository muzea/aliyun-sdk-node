export interface DescribeSlowLogRecordsRequest {
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~98041~~)接口查看目标账号下的可用地域信息，包括地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~98094~~)接口查看目标地域下所有的集群信息，包括集群ID。
     * @example `pc-************`
     */
    "DBClusterId": string;
    "NodeId"?: string;
    /**
     * 查询开始时间。格式为`YYYY-MM-DDThh:mmZ`（UTC时间）。
     * > * 支持查看最多30天内的慢日志信息。
     * > *  该参数输入的是UTC时间（即0时区），如果您的服务当前处于其他时区，请您进行时间转换。例如，当前您的服务所在时区的时间是北京时间（UTC+8时间）12:00点，如果您需要查询北京时间08:00点-12:00点的慢日志信息，那么应该输入的时间是00:00点-04:00点。
     * @example `2022-11-15T16:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间，需要晚于查询开始时间，且查询开始时间与结束时间的时间间隔需在24小时之内。格式为`YYYY-MM-DDThh:mmZ`（UTC时间）。
     * > 该参数输入的是UTC时间（即0时区），如果您的服务当前处于其他时区，请您进行时间转换。例如，当前您的服务所在时区的时间是北京时间（UTC+8时间）12:00点，如果您需要查询北京时间08:00点-12:00点的慢日志信息，那么应该输入的时间是00:00点-04:00点。
     * @example `2022-11-16T04:00Z`
     */
    "EndTime": string;
    /**
     * 数据库名称。
     * @example `testdb`
     */
    "DBName"?: string;
    /**
     * 每页记录数，取值范围如下：
     * * **30**
     * * **50**
     * * **100**
     * 默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值范围为大于0且不超过Integer的最大值。
     * 默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 慢日志统计里的SQL语句唯一标识符，可用于获取该SQL语句的慢日志明细。
     * @example `U2FsdGVk****`
     */
    "SQLHASH"?: string;
}
