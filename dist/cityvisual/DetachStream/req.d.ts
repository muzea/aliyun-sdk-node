interface DetachStreamRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    "Streams": string[];
    /**
    * 计算工作组ID。
    * @example `63`
    */ "JobGroupId": string;
}
export { DetachStreamRequest };