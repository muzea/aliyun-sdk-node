interface DetachLoadBalancersRequest {
    "RegionId"?: string;
    /**
    * 伸缩组的ID。
    * @example `AG6CQdPU8OKdwLjgZcJ****`
    */ "ScalingGroupId": string;
    "LoadBalancer": string[];
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 是否移除负载均衡实例后端服务器中属于伸缩组的实例：
    * - true：移除
    * - false：不移除
    * 默认值：false。
    * @example `false`
    */ "ForceDetach"?: boolean;
}
export { DetachLoadBalancersRequest };