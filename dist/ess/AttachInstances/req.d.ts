interface AttachInstancesRequest {
    "RegionId"?: string;
    /**
    * 伸缩组的ID。
    * @example `AG6CQdPU8OKdwLjgZcJ****`
    */ "ScalingGroupId": string;
    /**
    * InstanceId.N为待添加ECS实例的ID，N的取值范围：1～20。
    * @example `i-28wt4****`
    */ "InstanceId.1": string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * @example `i-28wt4****`
    */ "InstanceId.2"?: string;
    /**
    * @example `i-28wt4****`
    */ "InstanceId.3"?: string;
    /**
    * @example `i-28wt4****`
    */ "InstanceId.4"?: string;
    /**
    * @example `i-28wt4****`
    */ "InstanceId.5"?: string;
    /**
    * @example `i-28wt4****`
    */ "InstanceId.6"?: string;
    /**
    * @example `i-28wt4****`
    */ "InstanceId.7"?: string;
    /**
    * @example `i-28wt4****`
    */ "InstanceId.8"?: string;
    /**
    * @example `i-28wt4****`
    */ "InstanceId.9"?: string;
    /**
    * @example `i-28wt4****`
    */ "InstanceId.10"?: string;
    /**
    * @example `i-28wt4****`
    */ "InstanceId.11"?: string;
    /**
    * @example `i-28wt4****`
    */ "InstanceId.12"?: string;
    /**
    * @example `i-28wt4****`
    */ "InstanceId.13"?: string;
    /**
    * @example `i-28wt4****`
    */ "InstanceId.14"?: string;
    /**
    * @example `i-28wt4****`
    */ "InstanceId.15"?: string;
    /**
    * @example `i-28wt4****`
    */ "InstanceId.16"?: string;
    /**
    * @example `i-28wt4****`
    */ "InstanceId.17"?: string;
    /**
    * @example `i-28wt4****`
    */ "InstanceId.18"?: string;
    /**
    * @example `i-28wt4****`
    */ "InstanceId.19"?: string;
    /**
    * @example `i-28wt4****`
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
}
export { AttachInstancesRequest };