export interface DeleteIstioGatewayDomainsRequest {
    /**
     * 服务网格实例ID。
     * @example `c08ba3fd1e6484b0f8cc1ad8fe10d****`
     */
    "ServiceMeshId": string;
    /**
     * ASM网关名称。
     * @example `ingressgateway`
     */
    "IstioGatewayName"?: string;
    /**
     * 此网关公开的一个或多个主机，多个用半角逗号（,）分隔。
     * @example `example.com,demo.com`
     */
    "Hosts"?: string;
    /**
     * 端口名称。
     * @example `https`
     */
    "PortName"?: string;
    /**
     * 命名空间。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 查询的网关资源数目上限。
     * @example `10`
     */
    "Limit"?: string;
}
