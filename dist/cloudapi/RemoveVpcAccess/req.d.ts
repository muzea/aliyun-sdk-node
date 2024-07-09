export interface RemoveVpcAccessRequest {
    /**
     * 专用网络ID
     * @example `vpc-uf657qec7lx42paw3qxxx`
     */
    "VpcId": string;
    /**
     * 专用网络中的实例ID（ECS/负载均衡）
     * @example `i-uf6bzcg1pr4oh5jjmxxx`
     */
    "InstanceId": string;
    /**
     * 实例对应的端口号
     * @example `80`
     */
    "Port": number;
    /**
     * 是否需要批量工作
     * @example `true`
     */
    "NeedBatchWork"?: boolean;
}
