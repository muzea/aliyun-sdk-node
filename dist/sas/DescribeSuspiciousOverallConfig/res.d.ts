export interface DescribeSuspiciousOverallConfigResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6673D49C-A9AB-40DD-B4A2-B92306701AE7`
     */
    RequestId: string;
    /**
     * 配置信息。
     */
    OverallConfig: {
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
        Type: string;
        /**
         * 开关状态。取值：
         * - **off**：关闭
         * - **on**：开启
         * @example `on`
         */
        Config: string;
    };
}
