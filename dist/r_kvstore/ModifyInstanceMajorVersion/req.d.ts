interface ModifyInstanceMajorVersionRequest {
    "RegionId"?: string;
    /**
    * 要升级到的大版本号，当前支持`4.0`。
    * @example `4.0`
    */ "MajorVersion": string;
    "OwnerId"?: number;
    /**
    * 目标实例的ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
    /**
    * 升级执行时间：
    * * 0（立即执行）
    * * 1（在可维护时间段执行）
    * > 默认为0。
    * @example `0`
    */ "EffectTime"?: string;
}
export { ModifyInstanceMajorVersionRequest };