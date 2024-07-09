export interface OperateSuspiciousTargetConfigRequest {
    /**
     * 访问源的IP地址。
     * @example `1.2.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 设置主动防御的类型。取值
     * - **auto_breaking**：表示自动拦截。
     * - **webshell_cloud_breaking**：表示网站后门连接防御。
     * - **alinet**：表示恶意网络行为防御。
     * - **ransomware_breaking**：表示防勒索（诱饵捕获）。
     * - **alisecguard**：表示客户端自保护。
     * @example `auto_breaking`
     */
    "Type": string;
    /**
     * 管理主动防御的操作维度，目前支持以服务器UUID维度进行管理。
     * 唯一取值：**uuid**。
     * @example `uuid`
     */
    "TargetType": string;
    /**
     * 为服务器设置主动防御的参数。包括以下参数：
     * - **targetType**：防御配置的维度，目前支持UUID维度，固定值：**uuid**。
     * - **target**：需要设置防御配置的服务器的UUID。
     * - **flag**：为服务器开启或关闭主动防御，可选择**add**（开启）或**del**（关闭）。
     * @example `"[{"targetType":"uuid","target":"0585f81a-dd84-4ddf-9971-f59d12345678","flag":"add"},{"targetType":"uuid","target":"01acfd9d-e6a4-4e61-b9eb-aae012345678","flag":"add"},{"targetType":"uuid","target":"04a0e735-ad32-4835-b635-045812345678","flag":"add"}]"`
     */
    "TargetOperations": string;
}
