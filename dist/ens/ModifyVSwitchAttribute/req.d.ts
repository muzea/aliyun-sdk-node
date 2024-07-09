export interface ModifyVSwitchAttributeRequest {
    /**
     * 交换机ID。
     * @example `n-****`
     */
    "VSwitchId": string;
    /**
     * 交换机名称。
     * - 长度为2~128个英文或中文字符。
     * - 必须以大小写字母或中文开头，不能以 http:// 或 https:// 开头。
     * @example `Test-switch`
     */
    "VSwitchName"?: string;
    /**
     * 描述信息。
     * - 长度为2~256个英文或中文字符。
     * - 不能以 http:// 或 https:// 开头。
     * @example `this is my first vswitch`
     */
    "Description"?: string;
}
