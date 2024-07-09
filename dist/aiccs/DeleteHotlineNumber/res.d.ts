export interface DeleteHotlineNumberResponse {
    /**
     * 请求ID。
     * @example `98B032F5-6473-4EAC-8BA8-C28993513A1F`
     */
    RequestId: string;
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。返回Success表示请求成功。
     * @example `Success`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
