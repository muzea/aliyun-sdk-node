export interface UpdateGatewayServiceCheckResponse {
    /**
     * 请求ID。
     * @example `62CBFCB8-DDC6-588C-BF1B-88828AF*****`
     */
    RequestId: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `OK`
     */
    Message: string;
    /**
     * code仅仅用来和success同步。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：true：请求成功。                                 false：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 操作的服务ID。
     * @example `12`
     */
    Data: number;
}
