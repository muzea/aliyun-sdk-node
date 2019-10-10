interface DeleteScalingConfigurationRequest {
    "RegionId"?: string;
    /**
    * 待删除伸缩配置的ID。
    * @example `eOs27Kb0oXvQcUYjEGel****`
    */ "ScalingConfigurationId": string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
}
export { DeleteScalingConfigurationRequest };