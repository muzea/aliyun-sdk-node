export interface TerminateFeatureConsistencyCheckJobRequest {
    /**
     * 特征一致性检查任务ID。如何获取任务ID，请参见[ListFeatureConsistencyCheckJobs](~~2557571~~)。
     * @example `3`
     */
    "FeatureConsistencyCheckJobId": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 实例ID。如何获取实例ID，请参见[ListInstances](~~2411819~~)。
         * @example `pairec-cn-********`
         */
        InstanceId: string;
    };
}
