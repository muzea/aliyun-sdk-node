export interface DescribeASMGatewayImportedServicesRequest {
    /**
     * 服务网格实例ID
     * @example `c08ba3fd1e6484b0f8cc1ad8fe10d****`
     */
    "ServiceMeshId": string;
    /**
     * ASM网关名称
     * @example `ingressgateway`
     */
    "ASMGatewayName"?: string;
    /**
     * 服务所在命名空间
     * @example `default`
     */
    "ServiceNamespace"?: string;
}
