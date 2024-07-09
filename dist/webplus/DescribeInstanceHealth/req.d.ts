export interface DescribeInstanceHealthRequest {
    /**
     * id为实例ID，即instanceId，标识一个ECS实例
     * @example `i-wz9hwvnwm5tlv3u*****`
     */
    "InstanceId": string;
    "RegionId"?: string;
}
