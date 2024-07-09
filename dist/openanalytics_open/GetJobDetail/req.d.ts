export interface GetJobDetailRequest {
    /**
     * Spark作业ID。
     * @example `j202010271622hangzhouf742a4330000923`
     */
    "JobId": string;
    /**
     * 执行Spark作业的虚拟集群名称。
     * @example `MyCluster`
     */
    "VcName": string;
}
