interface ModifyElasticBandWidthRequest {
    "RegionId"?: string;
    /**
    * 要操作的实例ID。单次请求只支持修改1个实例的弹性防护带宽，且目标实例必须是正常状态。
    * @example `ddoscoo-cn-XXXXX`
    */ "InstanceId": string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * 新的弹性带宽值。
    * @example `30`
    */ "ElasticBandwidth": number;
}
export { ModifyElasticBandWidthRequest };