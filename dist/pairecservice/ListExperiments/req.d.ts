export interface ListExperimentsRequest {
    /**
     * 实验组ID。
     * @example `3`
     */
    "ExperimentGroupId"?: string;
    /**
     * 状态过滤。
     * ● Offline-未上线
     * ● Online-已上线
     * @example `Offline`
     */
    "Status"?: string;
    /**
     * 实例ID，可通过接口ListInstances获取。
     * @example `pairec-cn-abcdefg1234`
     */
    "InstanceId": string;
    /**
     * 快速查询时的过滤参数。会返回与名称/标签匹配的所有实验。
     * @example `experiment_test1`
     */
    "Query"?: string;
}
