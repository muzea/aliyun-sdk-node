interface RestartInstanceRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 目标实例的ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
    /**
    * 重启时间：
    * * 0（立即重启）
    * * 1（可运维时间段重启）
    * > 默认为0。
    * @example `1`
    */ "EffectiveTime"?: string;
}
export { RestartInstanceRequest };