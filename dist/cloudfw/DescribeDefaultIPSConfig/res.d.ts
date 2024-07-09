export interface DescribeDefaultIPSConfigResponse {
    /**
     * 结果的请求ID。
     * @example `133173B9-8010-5DF5-8B93-********`
     */
    RequestId: string;
    /**
     * IPS规则组。取值：
     * - **1**：宽松规则组。
     * - **2**：中等规则组。
     * - **3**：严格规则组。
     * @example `3`
     */
    RuleClass: number;
    /**
     * 威胁情报。取值：
     * - **1**：开启。
     * - **0**：关闭。
     * @example `0`
     */
    CtiRules: number;
    /**
     * 虚拟补丁开关。取值：
     * - **1**：开启。
     * - **0**：关闭。
     * @example `0`
     */
    PatchRules: number;
    /**
     * IPS防御模式。取值：
     * - **1**：拦截模式。
     * - **0**：观察模式。
     * @example `0`
     */
    RunMode: number;
    /**
     * 基础规则开关。取值：
     * - **1**：开启。
     * - **0**：关闭。
     * @example `0`
     */
    BasicRules: number;
}
