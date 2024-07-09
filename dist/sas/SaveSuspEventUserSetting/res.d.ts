export interface SaveSuspEventUserSettingResponse {
    /**
     * 请求响应结果状态。取值：
     * - **true**：处理成功。
     * - **false**：处理失败。
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
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `AE6229A0-BDBE-534C-A3F8-095EBXXXXXX`
     */
    RequestId: string;
}
