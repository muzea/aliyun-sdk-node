export interface UpdateHoneypotProbeRequest {
    /**
     * 探针ID。
     * >调用[ListHoneypotProbe](~~ListHoneypotProbe~~)接口可以获取该参数。
     * @example `bbe7e382-956f-473e-beed-bc73a258****`
     */
    "ProbeId": string;
    /**
     * 探针名称。
     * @example `svwsx-vpc-4430`
     */
    "DisplayName"?: string;
    /**
     * 检测类型ping。
     * @example `true`
     */
    "Ping"?: boolean;
    /**
     * 检查类型arp。
     * @example `false`
     */
    "Arp"?: boolean;
    /**
     * 监听IP列表。
     */
    "ServiceIpList"?: string[];
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
