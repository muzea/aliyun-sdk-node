export interface DescribePlaybookNodesOutputRequest {
    /**
     * 剧本的UUID。
     * >调用[DescribePlaybooks](~~DescribePlaybooks~~)接口可以获取该参数。
     * @example `ac343acc-1a61-4084-9a1c-xxxxx`
     */
    "PlaybookUuid": string;
    /**
     * 组件节点名称。
     * @example `DataFormat_1`
     */
    "NodeName": string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
