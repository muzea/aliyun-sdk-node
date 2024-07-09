export interface CreatePlaybookRequest {
    /**
     * 剧本的名称。
     * @example `test09`
     */
    "DisplayName": string;
    /**
     * 剧本的描述信息。
     * @example `This is a new version`
     */
    "Description"?: string;
    "TaskflowType"?: string;
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
