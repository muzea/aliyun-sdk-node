export interface ImportK8sClusterResponse {
    /**
     * 接口状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * EDAS中的集群ID。
     * @example `cf96d49a-6be2-4b6d-****-75c7fb86****`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `a5281053-08e4-47a5-b2ab-5c0323de7b5a`
     */
    RequestId: string;
}
