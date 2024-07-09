export interface DescribeSuspiciousUUIDConfigRequest {
    /**
     * 要查询的主动防御的防御类型。取值：
     * - **auto_breaking**：防病毒
     * - **ransomware_breaking**：防勒索（诱饵捕获）
     * - **webshell\_cloud_breaking**：网站后门连接防御
     * - **alinet**：恶意网络行为防御
     * - **alisecguard**：客户端自保护。
     * @example `alinet`
     */
    "Type": string;
}
