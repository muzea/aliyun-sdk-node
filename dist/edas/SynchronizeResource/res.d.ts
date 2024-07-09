export interface SynchronizeResourceResponse {
    /**
     * 接口请求返回的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 接口请求返回的消息。
     * @example `success`
     */
    Message: string;
    /**
     * 接口请求返回的数据。
     * @example `PopSyncResource success`
     */
    Data: string;
    /**
     * 接口请求唯一标识符。
     * @example `F8DFGED-K98***************`
     */
    RequestId: string;
    /**
     * 接口请求结果，取值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
}
