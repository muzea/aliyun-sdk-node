export interface AssociateNetworkAclRequest {
    /**
     * 关联的资源信息。
     */
    "Resource"?: {
        /**
         * 关联资源的类型。取值：**VSwitch**，交换机。
         * **N**的取值为**0**~**29**，即最多可以关联30个资源。
         * @example `VSwitch`
         */
        ResourceType: string;
        /**
         * 关联资源的ID。
         * @example `vsw-bp1de348lntdw****`
         */
        ResourceId: string;
    }[];
    /**
     * 网络ACL的ID。
     * @example `nacl-a2do9e413e0sp****`
     */
    "NetworkAclId": string;
    /**
     * 网络ACL所在的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否预检
     * @example `true`
     */
    "DryRun"?: boolean;
}
