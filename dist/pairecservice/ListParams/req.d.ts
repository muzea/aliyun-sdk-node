export interface ListParamsRequest {
    /**
     * 场景ID，可通过接口ListScenes获取。
     * @example `3`
     */
    "SceneId": string;
    /**
     * 参数名称。
     * @example `home`
     */
    "Name"?: string;
    /**
     * 参数所属的环境。
     * ● Daily-日常环境
     * ● Pre-预发环境
     * ● Prod-生产环境
     * @example `Daily`
     */
    "Environment"?: string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页大小。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * 实例ID，可通过接口ListInstances获取。
     * @example `pairec-cn-abcdefg1234`
     */
    "InstanceId": string;
}
