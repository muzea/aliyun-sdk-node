export interface ListScenesRequest {
    /**
     * 实例ID，可通过接口ListInstances获取。
     * @example `pairec-cn-abcdefg1234`
     */
    "InstanceId"?: string;
    /**
     * 场景名称过滤。
     * @example `scene1`
     */
    "Name"?: string;
}
