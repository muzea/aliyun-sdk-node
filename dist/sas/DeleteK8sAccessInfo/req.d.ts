export interface DeleteK8sAccessInfoRequest {
    /**
     * 接入k8s生成的默认值，通过GenerateK8sAccessInfo接口获取ID值。
     * @example `200`
     */
    "Id": number;
    /**
     * 该参数已废弃，无需关注。
     * @example `None`
     */
    "AliyunYundunGatewayProjectName"?: string;
    /**
     * 该参数已废弃，无需关注。
     * @example `None`
     */
    "AliyunYundunGatewayPopName"?: string;
    /**
     * 该参数已废弃，无需关注。
     * @example `None`
     */
    "AliyunYundunGatewayApiName"?: string;
}
