export interface UpdateContainerResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 变更流程ID。
     * @example `eb1b9862-****-476f-9e78-d6aa0842835a`
     */
    ChangeOrderId: string;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `a5281053-08e4-47a5-b2ab-5c0323******`
     */
    RequestId: string;
}
