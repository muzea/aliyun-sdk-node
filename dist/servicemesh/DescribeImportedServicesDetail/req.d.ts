export interface DescribeImportedServicesDetailRequest {
    /**
     * 服务网格ID
     * @example `cb8963379255149cb98c8686f274x****`
     */
    "ServiceMeshId": string;
    /**
     * 网关名称
     * @example `ingressgateway`
     */
    "ASMGatewayName"?: string;
    /**
     * 服务所在命名空间
     * @example `default`
     */
    "ServiceNamespace"?: string;
}
