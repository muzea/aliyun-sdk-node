export interface DescriberPython3ScriptLogsRequest {
    /**
     * 运行python3脚本时，返回的UUID。
     * >调用[RunPython3Script](~~RunPython3Script~~)接口可以获取该参数。
     * @example `69edc2b4-c95c-424f-9114-xxxxxxx`
     */
    "RequestUuid": string;
    /**
     * 请求和接收消息的语言类型。
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
