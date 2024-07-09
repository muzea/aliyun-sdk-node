export interface DeleteScalingRuleRequest {
    /**
     * 待删除伸缩规则的ID。
     * @example `asr-bp163l21e07uhnyt****`
     */
    "ScalingRuleId": string;
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-qingdao`
     */
    "RegionId"?: string;
}
