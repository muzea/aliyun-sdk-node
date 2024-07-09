export interface KillSparkJobRequest {
    /**
     * 执行Spark作业的虚拟集群名称。
     * @example `MyCluster`
     */
    "VcName": string;
    /**
     * Spark作业的ID。
     * @example `j202011031935hangzhouf742a4330003667`
     */
    "JobId": string;
}
