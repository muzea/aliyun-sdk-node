export interface OperateSuspiciousOverallConfigRequest {
    /**
     * 访问源的IP地址。
     * @example `222.178.XX.XX`
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
     * 开关类型。取值：
     * - **auto_breaking**：防病毒
     * - **ransomware_breaking**：防勒索（诱饵捕获）
     * - **webshell\_cloud_breaking**：网站后门连接防御
     * - **alinet**：恶意网络行为防御
     * - **k8s\_log_analysis**：容器K8s威胁检测
     * - **alisecguard**：客户端自保护防御模式
     * @example `k8s_log_analysis`
     */
    "Type": string;
    /**
     * 开关。取值：
     * - **on**：开启
     * - **off**：关闭
     * @example `off`
     */
    "Config": string;
    /**
     * 设置是否需要配置资产。默认**false**。取值：
     * - **true**：需要
     * - **false**：不需要
     * > 该值仅对**config**为**on**时有效
     * @example `true`
     */
    "NoTargetAsOn"?: boolean;
}
