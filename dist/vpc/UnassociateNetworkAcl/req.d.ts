export interface UnassociateNetworkAclRequest {
    /**
     * 关联资源的信息。
     */
    "Resource"?: {
        /**
         * 要解绑的关联资源类型。取值：**VSwitch**，交换机。
         * **N**的取值为0~29，即最多可以解绑30个资源。
         * @example `VSwitch`
         */
        ResourceType: string;
        /**
         * 要解绑的关联资源的ID。
         * @example `vsw-bp1de348lntdw****`
         */
        ResourceId: string;
    }[];
    /**
     * 要解绑关联资源的网络ACL的ID。
     * @example `nacl-a2do9e413e0sp****`
     */
    "NetworkAclId": string;
    /**
     * 网络ACL所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否检测此次请求。取值：
     * * **true**：发送检查请求。
     * * **false**（默认值）：发送正常请求。
     * @example `false`
     */
    "DryRun"?: boolean;
}
