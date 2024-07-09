export interface UpdateASMGatewayImportedServicesRequest {
    /**
     * 服务网格ID
     * @example `c08ba3fd1e6484b0f8cc1ad8fe10d****`
     */
    "ServiceMeshId": string;
    /**
     * 服务名列表，多个以英文逗号（,） 分隔，例如：reviews,sleep
     * @example `reviews,sleep`
     */
    "ServiceNames"?: string;
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
