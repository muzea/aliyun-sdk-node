export interface DeleteProfileCatalogResponse {
    /**
     * 响应code
     * @example `OK`
     */
    Code: string;
    /**
     * 错误消息
     * @example `SUCCESS`
     */
    Message: string;
    /**
     * 响应数据
     * @example `true`
     */
    Data: boolean;
    /**
     * 本次请求流水号，用于链路追踪
     * @example `XXXX-22222`
     */
    RequestId: string;
}
