export interface RenamePlaybookNodeRequest {
    /**
     * 剧本的UUID。
     * >调用[DescribePlaybooks](~~DescribePlaybooks~~)接口可以获取该参数。
     * @example `ac343acc-1a61-4084-9a1c-xxxxxxxx`
     */
    "PlaybookUuid": string;
    /**
     * 节点的新名称。
     * @example `waf_process`
     */
    "NewNodeName": string;
    /**
     * 要修改的节点名称。
     * @example `firewall_process`
     */
    "OldNodeName": string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
}
