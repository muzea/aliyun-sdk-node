export interface DeletionProtectionRequest {
    /**
     * 要设置删除保护功能的实例所在的地域ID。您可以调用[DescribeRegions](~~36063~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否开启删除保护功能，取值：
     * - **true**：开启。
     * - **false**：关闭。
     * @example `true`
     */
    "ProtectionEnable": boolean;
    /**
     * 要设置删除保护功能的实例类型，取值：
     * - **EIP**：弹性公网IP。
     * - **CBWP**：共享带宽。
     * - **NATGW**：NAT网关。
     * @example `EIP`
     */
    "Type": string;
    /**
     * 要设置删除保护功能的实例ID。
     * @example `eip-uf6id7gvguruxe41v****`
     */
    "InstanceId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000	`
     */
    "ClientToken"?: string;
}
