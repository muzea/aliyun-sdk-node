interface DeleteScalingRuleRequest {
    "RegionId"?: string;
    /**
    * 待删除伸缩规则的ID。
    * @example `eMKWG8SRNb9dBLAjweN****`
    */ "ScalingRuleId": string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
}
export { DeleteScalingRuleRequest };