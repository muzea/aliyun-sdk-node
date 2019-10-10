interface AttachStreamRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    "Streams": string[];
    /**
    * 计算工作组的ID。
    * @example `4`
    */ "JobGroupId": string;
    /**
    * 实例ID。
    * @example `cityvisual-xxxxx`
    */ "InstanceId"?: string;
}
export { AttachStreamRequest };