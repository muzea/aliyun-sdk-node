export interface RemoveVpcAccessAndAbolishApisRequest {
    /**
     * 指定要操作的vpcid
     * @example `vpc-bp1iw82phcgkvupgfv0o8`
     */
    "VpcId": string;
    /**
     * 专用网络中的实例ID（ECS/负载均衡）
     * @example `i-uf6iaale3gfef9t9cb41`
     */
    "InstanceId": string;
    /**
     * 服务端口。
     * @example `8080`
     */
    "Port": number;
    /**
     * 是否需要批量工作。
     * @example `true`
     */
    "NeedBatchWork"?: boolean;
}
