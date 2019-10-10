interface StartJobGroupRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 计算工作组的ID。
    * @example `4`
    */ "JobGroupId": string;
    "InstanceId"?: string;
}
export { StartJobGroupRequest };