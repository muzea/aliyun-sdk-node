interface DeleteJobGroupRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 计算工作组ID。
    * @example `3`
    */ "JobGroupId": string;
    "InstanceId"?: string;
}
export { DeleteJobGroupRequest };