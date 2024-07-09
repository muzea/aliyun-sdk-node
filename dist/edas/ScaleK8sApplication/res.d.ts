export interface ScaleK8sApplicationResponse {
    /**
     * 变更流程ID。可调用[GetChangeOrderInfo](~~62072~~)接口获取这次扩容或下线的具体执行进展。
     * @example `9d7232b2-****-****-b9d9-7e17695779ab`
     */
    ChangeOrderId: string;
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
     * 请求唯一标识ID。
     * @example `a5281053-08e4-47a5-b2ab-5c0323de7b5a`
     */
    RequestId: string;
}
