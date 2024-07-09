export interface DownloadSQLLogsRecordsRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * 查询关键词。
     * @example `select 1`
     */
    "QueryKeywords"?: string;
    /**
     * 查询开始时间。格式： yyyy-MM-ddTHH:mmZ（UTC时间）。
     * @example `2023-05-07T06:59Z`
     */
    "StartTime": string;
    /**
     * 数据库名称。
     * @example `testdb`
     */
    "Database"?: string;
    /**
     * 数据库账号。
     * @example `testuser`
     */
    "User"?: string;
    /**
     * 查询结束时间，格式：yyyy-MM-ddTHH:mm:ssZ，且大于查询开始时间。
     * @example `2023-05-08T06:59Z`
     */
    "EndTime": string;
    /**
     * 每页记录数，取值说明：
     * - **30**
     * - **50**
     * - **100**
     * 默认值：**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，大于0且不超过Integer的最大值；默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 执行耗时，单位为秒（s）。
     * @example `1`
     */
    "ExecuteCost"?: string;
    /**
     * 源端IP。
     * @example `100.XX.XX.90`
     */
    "SourceIP"?: string;
    /**
     * 执行状态。
     * - **1**：成功。
     * - **0**：失败。
     * @example `1`
     */
    "ExecuteState"?: string;
    /**
     * 操作类别，例如DQL、DML、DDL等。
     * @example `DQL`
     */
    "OperationClass"?: string;
    /**
     * 操作类型，例如SELECT。
     * @example `SELECT`
     */
    "OperationType"?: string;
    /**
     * 慢SQL最大耗时，取值需大于等于0，单位为秒（s）。
     * @example `999`
     */
    "MaxExecuteCost"?: string;
    /**
     * 慢SQL最小耗时，取值需大于等于0，单位为秒（s）。
     * @example `1`
     */
    "MinExecuteCost"?: string;
    /**
     * 下载文件的语言，取值如下：
     * - **zh**：简体中文。
     * - **en**：英文。
     * - **ja**：日语。
     * - **zh-tw**：繁体中文。
     * @example `zh`
     */
    "Lang"?: string;
}
