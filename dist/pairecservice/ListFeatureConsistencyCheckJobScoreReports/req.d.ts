export interface ListFeatureConsistencyCheckJobScoreReportsRequest {
    /**
     * 特征一致性检查任务报表ID。特征一致性检查任务ID。如何获取任务ID，请参见[ListFeatureConsistencyCheckJobs](~~2557561~~)。
     * @example `3`
     */
    "FeatureConsistencyCheckJobId": string;
    /**
     * 实例ID。如何获取实例ID，请参见[ListInstances](~~2411819~~)。
     * @example `pairec-cn-********`
     */
    "InstanceId"?: string;
    /**
     * 特征比对时排除的RequestId列表。
     */
    "ExcludeRequestIds"?: string[];
}
