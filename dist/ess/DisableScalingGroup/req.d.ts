interface DisableScalingGroupRequest {
    "RegionId"?: string;
    /**
    * 伸缩组的ID。
    * @example `dmIDKNcyWfzncX9MWX1****`
    */ "ScalingGroupId": string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
}
export { DisableScalingGroupRequest };