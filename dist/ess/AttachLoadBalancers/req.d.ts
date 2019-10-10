interface AttachLoadBalancersRequest {
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
    * 是否把当前伸缩组内的实例全部添加到负载均衡后端服务器，取值范围：
    *
    * - true：添加
    * - false：不添加
    * 默认值：false。
    * @example `false`
    */ "ForceAttach"?: boolean;
}
export { AttachLoadBalancersRequest };