export interface DescribeVpcFirewallDefaultIPSConfigResponse {
    /**
     * 本次请求的ID。
     * @example `850A84D6-0DE4-4797-A1E8-00090125adf1`
     */
    RequestId: string;
    /**
     * IPS防御模式。取值：
     * - **1**：拦截模式。
     * - **0**：观察模式。
     * @example `0`
     */
    RunMode: number;
    /**
     * 虚拟补丁开关。取值：
     * - **1**：开。
     * - **0**：关。
     * @example `1`
     */
    EnableAllPatch: number;
    /**
     * 基础规则开关。取值：
     * - **1**：开。
     * - **0**：关。
     * @example `1`
     */
    BasicRules: number;
}
