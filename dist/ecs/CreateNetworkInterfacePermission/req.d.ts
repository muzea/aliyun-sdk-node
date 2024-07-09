export interface CreateNetworkInterfacePermissionRequest {
    /**
     * 弹性网卡权限的地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 阿里云合作伙伴（认证ISV）账号ID或者个人用户ID。
     * @example `1234567890`
     */
    "AccountId": number;
    /**
     * 弹性网卡ID。
     * @example `eni-bp14v2sdd3v8htln****`
     */
    "NetworkInterfaceId": string;
    /**
     * 弹性网卡权限动作。当前仅支持InstanceAttach。
     * InstanceAttach：允许授权的用户将您的弹性网卡挂载到对方的ECS实例上。ECS实例必须和弹性网卡在同一个可用区中。
     * @example `InstanceAttach`
     */
    "Permission": string;
}
