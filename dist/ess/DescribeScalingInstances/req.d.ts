interface DescribeScalingInstancesRequest {
    /**
    * 伸缩组所属地域的ID。
    * @example `cn-qingdao`
    */ "RegionId": string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 伸缩组的ID。
    * @example `asg-****`
    */ "ScalingGroupId"?: string;
    /**
    * 关联伸缩配置的ID。
    * @example `asc-****`
    */ "ScalingConfigurationId"?: string;
    /**
    * ECS实例在伸缩组中的健康状态，未处于运行中（Running）状态的ECS实例会被判定为不健康的ECS实例，取值范围：
    * - Healthy：健康的ECS实例。
    * - Unhealthy：不健康的ECS实例。
    * 弹性伸缩会自动移出伸缩组中不健康的ECS实例。弹性伸缩会停止和释放自动创建的ECS实例，但不会停止和释放手工添加的ECS实例。
    * @example `Healthy`
    */ "HealthStatus"?: string;
    /**
    * ECS实例在伸缩组中的生命周期状态，取值范围：
    *
    * - InService：已成功加入伸缩组并正常提供服务。
    * - Pending：正在加入伸缩组但还未完成相关配置，包括创建实例、加入负载均衡、添加RDS访问名单等过程。
    * - Removing：正在移出伸缩组。
    *
    * @example `InService`
    */ "LifecycleState"?: string;
    /**
    * ECS实例的创建类型，取值范围：
    * - AutoCreated：伸缩组根据伸缩配置和伸缩规则自动创建的ECS实例。
    * - Attached：不是通过弹性伸缩服务创建，而是手工添加到伸缩组中的ECS实例。
    * @example `AutoCreated`
    */ "CreationType"?: string;
    /**
    * ECS实例列表的页码，起始值：1。
    * 默认值：1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数，最大值：50。
    * 默认值：10。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * InstanceId.N为ECS实例的ID，N的取值范围：1～20。返回查询结果时忽略失效的InstanceId，并且不报错。
    * @example `i-281vv****`
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
}
export { DescribeScalingInstancesRequest };