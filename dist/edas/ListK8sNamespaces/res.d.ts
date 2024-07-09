export interface ListK8sNamespacesResponse {
    /**
     * 请求ID
     * @example `57F146F6-3C94-****-****-A66EF4B9*****`
     */
    RequestId: string;
    /**
     * 接口状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 接口请求返回的信息。
     * @example `success`
     */
    Message: string;
    /**
     * 接口响应数据。
     */
    Data: {
        /**
         * K8s命名空间。
         * @example `development`
         */
        Namespace: string;
    }[];
}
