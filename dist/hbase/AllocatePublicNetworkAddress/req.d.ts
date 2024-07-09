export interface AllocatePublicNetworkAddressRequest {
    /**
     * 集群ID。
     * @example `hb-t4naqsay5gn******`
     */
    "ClusterId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。                              说明：若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `83b2b5e117a5b8bce0fae88d90576a84_6452320_82718582`
     */
    "ClientToken"?: string;
}
