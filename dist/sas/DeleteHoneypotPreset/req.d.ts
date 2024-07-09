export interface DeleteHoneypotPresetRequest {
    /**
     * 蜜罐模板唯一ID。
     * >调用[ListHoneypotPreset](~~ListHoneypotPreset~~)接口可以获取该参数。
     * @example `84104b7b-a2bc-41df-a190-12298f99xxxx`
     */
    "HoneypotPresetId": string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
