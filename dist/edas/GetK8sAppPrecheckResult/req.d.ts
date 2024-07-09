export interface GetK8sAppPrecheckResultRequest {
    /**
     * EDAS集群ID。
     * @example `c37aec2a-bcca-4ec1-****-************`
     */
    "ClusterId": string;
    /**
     * K8s集群命名空间。
     * @example `default`
     */
    "Namespace": string;
    /**
     * 应用名称。
     * @example `testapp`
     */
    "AppName": string;
}
