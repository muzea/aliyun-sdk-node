export interface GetAccountingReportRequest {
    /**
     * 集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 查询开始时间点。Unix时间戳类型，表示从1970-1-1 00:00:00 UTC计算起的秒数。
     * @example `1576922873`
     */
    "StartTime"?: number;
    /**
     * 查询结束时间点。Unix时间戳类型，表示从1970-1-1 00:00:00 UTC计算起的秒数。
     * @example `1577441873`
     */
    "EndTime"?: number;
    /**
     * 查询类别。取值范围：
     * - total_report：查询不同维度的核时数。
     * - job_report：统计节点的历史节点数据。
     * - number_report：查询不同维度的作业信息。
     * @example `job_report`
     */
    "ReportType": string;
    /**
     * 查询对应维度的实际名称。取值范围：
     * - 当参数Dim取值为user时，FilterValue取值为指定的用户名称。
     * - 当参数Dim取值为queue时，FilterValue取值为指定的队列名称。
     * - 当参数Dim取值为instance时，FilterValue取值为实例名称。
     * @example `userNo1`
     */
    "FilterValue"?: string;
    /**
     * 查询维度。取值范围：
     * - user：按用户查询。
     * - queue：按队列查询。
     * - instance：按实例查询。
     * @example `user`
     */
    "Dim"?: string;
    /**
     * 作业ID。
     * @example `[{Id: 1.scheduler}]`
     */
    "JobId"?: string;
    /**
     * 当前页码。
     * 起始值：1
     * 默认值：1
     * @example `1`
     */
    "PageSize"?: number;
    /**
     * 每页显示的条数。取值范围：1~50
     * 默认值：10
     * @example `10`
     */
    "PageNumber"?: number;
}
