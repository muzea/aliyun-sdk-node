export interface UpdateGatewayRouteTimeoutResponse {
    /**
     * Id of the request
     * @example `5359729E-A059-5942-98AF-E981E89C99FA`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应描述
     * @example `You are not authorized to perform this operation.`
     */
    Message: string;
    /**
     * 返回值。
     * @example `200`
     */
    Code: number;
    /**
     * 操作是否成功。取值：true：成功。false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 节点数据。
     * @example `400`
     */
    Data: number;
}
