export interface GetJobAttemptLogRequest {
    /**
     * Spark作业ID。您可以在作业管理页面查看作业。
     * @example `j202105272322hangzhou5d64f1560000128`
     */
    "JobId": string;
    /**
     * 执行Spark作业的虚拟集群名称。您可以在虚拟集群管理页面查看虚拟集群名称。
     * @example `release-test`
     */
    "VcName": string;
    /**
     * Spark作业尝试ID。
     * @example `j202105272322hangzhou5d64f1560000128-0001`
     */
    "JobAttemptId": string;
}
