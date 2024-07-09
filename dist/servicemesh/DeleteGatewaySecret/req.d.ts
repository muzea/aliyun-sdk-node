export interface DeleteGatewaySecretRequest {
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
     * 密钥名称。
     * @example `bookinfo-secret`
     */
    "SecretName"?: string;
}
