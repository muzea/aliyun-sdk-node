export interface ModifyDefaultIPSConfigRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 威胁情报开关。取值：
     * - **1**：开启。
     * - **0**：关闭。
     * @example `0`
     */
    "CtiRules": string;
    /**
     * 基础规则开关。取值：
     * - **1**：开启。
     * - **0**：关闭。
     * @example `1`
     */
    "BasicRules": string;
    /**
     * 虚拟补丁开关。取值：
     * - **1**：开启。
     * - **0**：关闭。
     * @example `1`
     */
    "PatchRules"?: string;
    /**
     * IPS防御模式。取值：
     * - **1**：拦截模式。
     * - **0**：观察模式。
     * @example `0`
     */
    "RunMode": string;
    /**
     * IPS规则组。取值：
     * - **1**：宽松规则组。
     * - **2**：中等规则组。
     * - **3**：严格规则组。
     * @example `1`
     */
    "RuleClass"?: string;
}
