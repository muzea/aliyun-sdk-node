export interface DescribeIstioGatewayDomainsRequest {
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
