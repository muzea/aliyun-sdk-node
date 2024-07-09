export interface GetJobStatusRequest {
    /**
     * Spark作业的ID。您可以登录[DLA控制台](https://datalakeanalytics.console.aliyun.com/)，在作业任务列表中获取作业任务ID。
     * @example `j202011031935hangzhouf742a4330003667`
     */
    "JobId": string;
    /**
     * 执行作业的虚拟集群名称。
     * @example `MyCluster`
     */
    "VcName": string;
}
