export interface DescribeIstioGatewayDomainsResponse {
    /**
     * 请求ID。
     * @example `31d3a0f0-07ed-4f6e-9004-1804498c****`
     */
    RequestId: string;
    /**
     * 网关域名详情列表。
     */
    GatewaySecretDetails: {
        /**
         * 域名列表。
         */
        Domains: string[];
        /**
         * 协议，取值：`HTTP`、` HTTPS`、`GRPC`、`HTTP2` 、 `MONGO` 、` TCP`、 `TLS`。
         * @example `HTTPS`
         */
        Protocol: string;
        /**
         * 包含TLS证书、CA证书的密钥名称。
         * @example `bookinfo-secret`
         */
        CredentialName: string;
        /**
         * JSON格式的信息详情。
         * @example `{   "servers": [     {       "port": {         "number": 27018,         "name": "mongo",         "protocol": "MONGO"       },       "hosts": [         "*"       ]     }   ] }`
         */
        Detail: string;
        /**
         * 端口名称。
         * @example `https-demo`
         */
        PortName: string;
        /**
         * 命名空间。
         * @example `default`
         */
        Namespace: string;
        /**
         * gateway CR 的名称
         * @example `ingressgateway`
         */
        GatewayCRName: string;
    }[];
}
