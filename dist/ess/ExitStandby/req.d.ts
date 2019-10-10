interface ExitStandbyRequest {
    "RegionId"?: string;
    /**
    * 伸缩组的ID。
    * @example `AG6CQdPU8OKdwLjgZcJ****`
    */ "ScalingGroupId": string;
    "InstanceId": string[];
    /**
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { ExitStandbyRequest };