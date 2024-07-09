export interface DescribeSoarRecordInOutputRequest {
    /**
     * 组件动作的UUID。
     * >调用[DescribeSoarTaskAndActions](~~DescribeSoarTaskAndActions~~)接口可以获取该参数。
     * @example `0531ff66-dd05-4f24-84bf-xxxxxxxx`
     */
    "ActionUuid": string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
}
