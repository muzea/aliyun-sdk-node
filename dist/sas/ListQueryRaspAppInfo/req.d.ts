export interface ListQueryRaspAppInfoRequest {
    /**
     * uuids 列表，逗号分割
     * @example `6541631a-7d47-41fd-9fef-9518113f****`
     */
    "Uuids"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
