interface ModifyInstanceMaintainTimeRequest {
    "RegionId"?: string;
    /**
    * 可维护时间段的开始时间，格式：`HH:mmZ`。
    * @example `03:00Z`
    */ "MaintainStartTime": string;
    /**
    * 可维护时间段的结束时间，格式：`HH:mmZ`。
    * > 开始时间和结束时间的间隔应为1小时，如：MaintainStartTime为`01:00Z`，MaintainEndTime为`02:00Z`。
    * @example `02:00Z`
    */ "MaintainEndTime": string;
    "OwnerId"?: number;
    /**
    * 目标实例的ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
}
export { ModifyInstanceMaintainTimeRequest };