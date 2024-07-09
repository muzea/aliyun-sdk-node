export interface ListArtifactLifecycleRuleRequest {
    /**
     * 企业版实例id
     * @example `cri-eztul9ucz76q****`
     */
    "InstanceId": string;
    /**
     * 页号
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 页大小
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 是否开启生命周期管理
     * @example `true`
     */
    "EnableDeleteTag"?: boolean;
}
