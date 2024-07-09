export interface ModifyContainerDefenseRuleSwitchResponse {
    /**
     * 返回修改的行数。
     * @example `30`
     */
    Data: number;
    /**
     * 接口调用的结果状态。取值：
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
     * 接口请求返回的信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `C8A137FB-6E18-5741-9B47-D9A0EBA3495F`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
