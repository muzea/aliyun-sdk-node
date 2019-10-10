interface EnableScalingGroupRequest {
    "RegionId"?: string;
    /**
    * 伸缩组的ID。
    * @example `dmIDKNcyWfzncX9MWX1****`
    */ "ScalingGroupId": string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 需要在伸缩组内激活的伸缩配置的ID。
    * @example `cGsGHrdMBa3DcDrrBVcc****`
    */ "ActiveScalingConfigurationId"?: string;
    /**
    * InstanceId.N为启用后需要加入伸缩组的ECS实例的ID，N的取值范围：1～20。
    * @example `i-283vv****`
    */ "InstanceId.1"?: string;
    /**
    * @example `i-283vv****`
    */ "InstanceId.2"?: string;
    /**
    * @example `i-283vv****`
    */ "InstanceId.3"?: string;
    /**
    * @example `i-283vv****`
    */ "InstanceId.4"?: string;
    /**
    * @example `i-283vv****`
    */ "InstanceId.5"?: string;
    /**
    * @example `i-283vv****`
    */ "InstanceId.6"?: string;
    /**
    * @example `i-283vv****`
    */ "InstanceId.7"?: string;
    /**
    * @example `i-283vv****`
    */ "InstanceId.8"?: string;
    /**
    * @example `i-283vv****`
    */ "InstanceId.9"?: string;
    /**
    * @example `i-283vv****`
    */ "InstanceId.10"?: string;
    /**
    * @example `i-283vv****`
    */ "InstanceId.11"?: string;
    /**
    * @example `i-283vv****`
    */ "InstanceId.12"?: string;
    /**
    * @example `i-283vv****`
    */ "InstanceId.13"?: string;
    /**
    * @example `i-283vv****`
    */ "InstanceId.14"?: string;
    /**
    * @example `i-283vv****`
    */ "InstanceId.15"?: string;
    /**
    * @example `i-283vv****`
    */ "InstanceId.16"?: string;
    /**
    * @example `i-283vv****`
    */ "InstanceId.17"?: string;
    /**
    * @example `i-283vv****`
    */ "InstanceId.18"?: string;
    /**
    * @example `i-283vv****`
    */ "InstanceId.19"?: string;
    /**
    * @example `i-283vv****`
    */ "InstanceId.20"?: string;
    /**
    * LoadBalancerWeight.N为对应ECS实例后端服务器的权重，N的取值范围：1～20，该参数取值范围：0~100。
    * 默认值：50。
    * @example `50`
    */ "LoadBalancerWeight.1"?: number;
    /**
    * @example `50`
    */ "LoadBalancerWeight.2"?: number;
    /**
    * @example `50`
    */ "LoadBalancerWeight.3"?: number;
    /**
    * @example `50`
    */ "LoadBalancerWeight.4"?: number;
    /**
    * @example `50`
    */ "LoadBalancerWeight.5"?: number;
    /**
    * @example `50`
    */ "LoadBalancerWeight.6"?: number;
    /**
    * @example `50`
    */ "LoadBalancerWeight.7"?: number;
    /**
    * @example `50`
    */ "LoadBalancerWeight.8"?: number;
    /**
    * @example `50`
    */ "LoadBalancerWeight.9"?: number;
    /**
    * @example `50`
    */ "LoadBalancerWeight.10"?: number;
    /**
    * @example `50`
    */ "LoadBalancerWeight.11"?: number;
    /**
    * @example `50`
    */ "LoadBalancerWeight.12"?: number;
    /**
    * @example `50`
    */ "LoadBalancerWeight.13"?: number;
    /**
    * @example `50`
    */ "LoadBalancerWeight.14"?: number;
    /**
    * @example `50`
    */ "LoadBalancerWeight.15"?: number;
    /**
    * @example `50`
    */ "LoadBalancerWeight.16"?: number;
    /**
    * @example `50`
    */ "LoadBalancerWeight.17"?: number;
    /**
    * @example `50`
    */ "LoadBalancerWeight.18"?: number;
    /**
    * @example `50`
    */ "LoadBalancerWeight.19"?: number;
    /**
    * @example `50`
    */ "LoadBalancerWeight.20"?: number;
    /**
    * 实例启动模板的ID，用于指定伸缩组从实例启动模板获取启动配置信息。
    * @example `lt-m5e3ofjr1zn1aw7****`
    */ "LaunchTemplateId"?: string;
    /**
    * 实例启动模板的版本，取值范围：
    * - 固定的模板版本号
    * - Default：始终使用模板默认版本
    * - Latest：始终使用模板最新版本
    *
    * @example `Default`
    */ "LaunchTemplateVersion"?: string;
}
export { EnableScalingGroupRequest };