interface ModifyInstanceMinorVersionRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
    /**
    * 要升级到的版本，默认值：latest_version，即最新版本。
    * @example `latest_version`
    */ "Minorversion"?: string;
    /**
    * 升级执行时间，取值：
    * * 0（立即执行）
    * * 1（可维护时间内执行）
    * 默认值：0。
    * @example `0`
    */ "EffectTime"?: string;
}
export { ModifyInstanceMinorVersionRequest };