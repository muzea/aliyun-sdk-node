export interface DescribeServiceMeshUpgradeStatusRequest {
    /**
     * ASM实例ID
     * @example `11fd0027-c27e-41bb-a565-75583054****`
     */
    "ServiceMeshId": string;
    /**
     * 加入ASM实例管控的数据面集群ID列表，使用逗号分隔。
     * @example `caeac85a793c94afbbb0a4bb20320****`
     */
    "GuestClusterIds"?: string;
    /**
     * ASM网关的全限定名称列表。使用逗号分隔。
     * @example `istio-system:ingressgateway1,istio-system:ingressgateway2`
     */
    "AllIstioGatewayFullNames"?: string;
}
