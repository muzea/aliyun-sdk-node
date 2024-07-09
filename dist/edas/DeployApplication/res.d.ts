export interface DeployApplicationResponse {
    /**
     * 接口请求的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 应用部署的变更流程ID。
     * @example `adf86823-055b-48a4-a59f-fa5582******`
     */
    ChangeOrderId: string;
    /**
     * 接口请求返回的信息。
     * @example `success`
     */
    Message: string;
    /**
     * 接口请求唯一标识符。
     * @example `d6834ee9-5045-*************`
     */
    RequestId: string;
}
