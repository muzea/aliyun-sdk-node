export interface CreateIstioGatewayDomainsRequest {
    /**
     * 服务网格实例ID。
     * @example `c08ba3fd1e6484b0f8cc1ad8fe10d****`
     */
    "ServiceMeshId": string;
    /**
     * ASM网关名称。
     * @example `ingressgateway`
     */
    "IstioGatewayName": string;
    /**
     * 此网关公开的一个或多个主机，多个用半角逗号（,）分隔。
     * @example `example.com,demo.com`
     */
    "Hosts": string;
    /**
     * 网关提供的端口号。
     * @example `443`
     */
    "Number": number;
    /**
     * 端口名称。
     * @example `http-demo`
     */
    "PortName": string;
    /**
     * 协议，取值：`HTTP` 、 `HTTPS` 、 `GRPC` 、`HTTP2` 、`MONGO` 、 `TCP` 、 `TLS`。
     * @example `HTTPS`
     */
    "Protocol": string;
    /**
     * 包含TLS证书、CA证书的密钥名称。
     * @example `bookinfo-secret`
     */
    "Credential"?: string;
    /**
     * 是否强制使用TLS保护连接，取值：
     * - `true`：强制使用TLS保护连接。
     * - `false`：不强制使用TLS保护连接。
     * @example `true`
     */
    "ForceHttps"?: boolean;
    /**
     * 命名空间。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 查询网关资源数目上限。
     * @example `10`
     */
    "Limit"?: string;
}
