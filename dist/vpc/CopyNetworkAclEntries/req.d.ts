export interface CopyNetworkAclEntriesRequest {
    /**
     * 网络ACL所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 网络ACL的ID。
     * @example `nacl-a2do9e413e0spxxxxxxxx`
     */
    "NetworkAclId": string;
    /**
     * 被复制的网络ACL的ID。
     * @example `nacl-ghuo9ehg3e0spxxxxxxxx`
     */
    "SourceNetworkAclId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123`
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
