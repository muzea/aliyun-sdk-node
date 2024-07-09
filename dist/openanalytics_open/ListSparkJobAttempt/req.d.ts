export interface ListSparkJobAttemptRequest {
    /**
     * 执行Spark作业的虚拟集群名称。
     * @example `release-test`
     */
    "VcName": string;
    /**
     * 需要查询的页码号，用于遍历全部数据，页码的编码从1开始。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页返回的作业的个数。
     * @example `10`
     */
    "PageSize": number;
    /**
     * JobAttempt过滤条件，JSON格式。
     * @example `{"status":"success", "createTime":"2021-05-27 11:00:00", "timeZone":"Asia/Shanghai"}`
     */
    "Condition"?: any;
    /**
     * Spark作业ID。您可以在作业管理页面查看作业ID。
     * @example `j202105272322hangzhou5d64f1560000128`
     */
    "JobId": string;
}
