export interface ListFeatureConsistencyCheckJobFeatureReportsRequest {
    /**
     * 特征一致性检查任务ID。如何获取任务ID，请参见[ListFeatureConsistencyCheckJobs](~~2557571~~)。
     * @example `3`
     */
    "FeatureConsistencyCheckJobId": string;
    /**
     * 实例ID。如何获取实例ID，请参见[ListInstances](~~2411819~~)。
     * @example `pairec-cn-********`
     */
    "InstanceId": string;
    /**
     * 特征比对时的UserId。
     * @example `1010`
     */
    "LogUserId": string;
    /**
     * 特征比对时的ItemId。
     * @example `9010`
     */
    "LogItemId": string;
    /**
     * 特征比对时的RequestId。
     * @example `F7AC05FF-EDE7-5C2B-B9AE-33D6DF4178BA`
     */
    "LogRequestId": string;
}
