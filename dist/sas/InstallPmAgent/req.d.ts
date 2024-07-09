export interface InstallPmAgentRequest {
    /**
     * 访问源的IP地址。
     * @example `58.35.xx.xx`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型，默认值**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 服务器UUID列表，多个服务器UUID之间使用半角逗号（,）隔开。
     * @example `inet-a6444920-d303-4ccf-ab87-a1d3cd49****`
     */
    "Uuids": string;
    /**
     * 运维插件类型。
     * - **aliyun_monitor**：表示云监控插件
     * @example `aliyun_monitor`
     */
    "Type": string;
}
