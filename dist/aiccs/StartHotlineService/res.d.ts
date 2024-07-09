export interface StartHotlineServiceResponse {
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 请求调用成功后返回，发起心跳所需的Token。
     * @example `0079e7a845e373****`
     */
    Data: string;
    /**
     * 状态码。返回Success表示请求成功。
     * @example `Success`
     */
    Code: string;
    /**
     * 接口调用是否成功。
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
