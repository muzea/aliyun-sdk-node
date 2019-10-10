interface DeleteScalingGroupRequest {
    "RegionId"?: string;
    /**
    * 伸缩组的ID。
    * @example `dmIDKNcyWfzncX9MWX1****`
    */ "ScalingGroupId": string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 如伸缩组存在ECS实例或正在进行伸缩活动，是否强制删除伸缩组并移出和释放ECS实例。取值范围：
    * - true：强制删除伸缩组。
    * - false：不强制删除伸缩组。
    * 默认值：false。
    * @example `false`
    */ "ForceDelete"?: boolean;
}
export { DeleteScalingGroupRequest };