export interface CreateHoneypotPresetResponse {
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
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7C1C6E65-C8B9-54C9-9F92-2F5E51C4E16D`
     */
    RequestId: string;
    /**
     * 请求数据结果的HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 蜜罐模板的创建结果。
     */
    HoneypotPreset: {
        /**
         * 蜜罐模板唯一ID。
         * @example `d6ece172-34d9-4942-99a4-b309cb55xxxx`
         */
        HoneypotPresetId: string;
    };
}
