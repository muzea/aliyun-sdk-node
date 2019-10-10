interface EnterStandbyRequest {
    "RegionId"?: string;
    /**
    * 伸缩组的ID。
    * @example `AG6CQdPU8OKdwLjgZcJ****`
    */ "ScalingGroupId": string;
    "InstanceId": string[];
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
}
export { EnterStandbyRequest };