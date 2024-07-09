export interface ListExperimentGroupsRequest {
    /**
     * 层ID，可通过接口ListLayers获取。
     * @example `3`
     */
    "LayerId"?: string;
    /**
     * 状态过滤
     * ● Offline-未上线
     * ● Online-已上线
     * ● Pushed-已推全
     * @example `Online`
     */
    "Status"?: string;
    /**
     * 实例ID，可通过接口ListInstances获取。
     * @example `pairec-cn-abcdefg1234`
     */
    "InstanceId": string;
    "RegionId"?: string;
    "TimeRangeStart"?: string;
    "TimeRangeEnd"?: string;
}
