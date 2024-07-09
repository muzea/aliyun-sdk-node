export interface GetPolicyRequest {
    /**
     * 权限策略名称。
     * 长度为1~128个字符，可包含英文字母、数字和短划线（-）。
     * @example `OSS-Administrator`
     */
    "PolicyName": string;
    /**
     * 权限策略类型。取值：
     * - Custom：自定义策略。
     * - System：系统策略。
     * @example `Custom`
     */
    "PolicyType": string;
    /**
     * 语言类型。系统权限策略的描述将以此语言返回。取值：
     * - en：英文。
     * - zh-CN：中文。
     * - ja：日文。
     * @example `zh-CN`
     */
    "Language"?: string;
}
