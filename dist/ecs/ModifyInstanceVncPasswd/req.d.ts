export interface ModifyInstanceVncPasswdRequest {
    /**
     * ECS实例。
     * @example `i-bp67acfmxazb4ph****`
     */
    "InstanceId": string;
    /**
     * ECS实例所在的地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 新的ECS实例管理终端连接密码。
     * @example `Ecs123`
     */
    "VncPassword": string;
}
