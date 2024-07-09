export interface GetHoneypotPresetRequest {
    /**
     * 蜜罐模板唯一ID。
     * >调用[ListHoneypotPreset](~~ListHoneypotPreset~~)接口可以获取该参数。
     * @example `207ca117-44b9-495d-84e7-50289b4cxxxx`
     */
    "HoneypotPresetId": string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `en`
     */
    "Lang"?: string;
}
