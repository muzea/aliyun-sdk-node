export interface GetQueryOptimizeExecErrorStatsRequest {
    /**
     * 数据库引擎，取值：
     * - **MySQL**
     * - **PolarDBMySQL**
     * - **PostgreSQL**
     * @example `MySQL`
     */
    "Engine": string;
    /**
     * 实例ID，多个实例ID间用逗号分隔。
     * @example `rm-2ze8g2am97624****`
     */
    "InstanceIds"?: string;
    /**
     * SQL文本关键词，多个关键词以空格分隔。
     * @example `select update`
     */
    "Keywords"?: string;
    /**
     * 多个SQL文本关键词逻辑关系，当前支持：
     * - **or**：或。
     * - **and**：与。
     * @example `or`
     */
    "LogicalOperator"?: string;
    /**
     * 需要查询的数据库名。
     * @example `testdb01`
     */
    "DbNames"?: string;
    /**
     * 查询数据的日期，格式为Unix时间戳，单位为毫秒。
     * @example `1642953600000`
     */
    "Time": string;
    /**
     * 分页查询每页数据量，默认为10。
     * @example `10`
     */
    "PageSize": string;
    /**
     * 分页查询的页码，从1开始，默认为1。
     * @example `1`
     */
    "PageNo": string;
    /**
     * 排序字段，当前仅支持error_count（SQL执行错误次数）。
     * @example `error_count`
     */
    "OrderBy"?: string;
    /**
     * 是否升序排序，默认为**true**。
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "Asc"?: string;
    /**
     * 实例所属地域，取值：
     * - **cn-china**：中国内地。
     * - **cn-hongkong**：中国香港。
     * - **ap-southeast-1**：新加坡。
     * 此参数只有在请求参数**InstanceIds**为空时有效。如果请求参数**InstanceIds**为空时，按照**Region**参数设置的地域获取数据，系统默认实例所属地域为**cn-china**；如果请求参数**InstanceIds**不为空时，即使设置了**Region**参数，也以**InstanceIds**所传入的第一个实例所在地域为准获取数据。
     * > 在中国内地各地域创建的实例，传入此参数时，都为**cn-china**。
     * @example `cn-china`
     */
    "Region"?: string;
}
