export interface UpdateImageVulWhitelistTargetResponse {
    /**
     * 返回的处理结果。
     * - **true**：处理成功。
     * - **false**：处理失败。
     * @example `true`
     */
    Data: boolean;
    /**
     * 接口调用是否成功。取值：
     * - **true**：接口调用成功。
     * - **false**：接口调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 唯一请求ID。
     * @example `9F4E6157-9600-5588-86B9-38F09067****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
