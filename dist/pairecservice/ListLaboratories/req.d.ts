export interface ListLaboratoriesRequest {
    /**
     * 实验室所属的环境。
     * ● Daily-日常环境
     * ● Pre-预发环境
     * ● Prod-生产环境
     * @example `Daily`
     */
    "Environment"?: string;
    /**
     * 场景ID，可通过接口ListScenes获取。
     * @example `3`
     */
    "SceneId": string;
    /**
     * 状态。
     * ● Offline-未上线。
     * ● Online-已上线。
     * @example `Offline`
     */
    "Status"?: string;
    /**
     * 实例ID，可通过接口ListInstances获取。
     * @example `pairec-test1`
     */
    "InstanceId": string;
}
