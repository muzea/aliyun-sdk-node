export interface DescribeSuspiciousOverallConfigRequest {
    /**
     * 访问源的IP地址。
     * @example `39.161.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 开关类型。取值：
     * - **auto_breaking**：防病毒
     * - **ransomware_breaking**：防勒索（诱饵捕获）
     * - **webshell\_cloud_breaking**：网站后门连接防御
     * - **alinet**：恶意网络行为防御
     * - **k8s\_log_analysis**：容器K8s威胁检测
     * - **alisecguard**：客户端自保护防御模式
     * @example `auto_breaking`
     */
    "Type": string;
}
