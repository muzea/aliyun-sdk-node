export interface CreateSecurityGroupRequest {
    /**
     * 安全组名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * 默认值：空。
     * @example `Dcdn1:2_3-4`
     */
    "SecurityGroupName"?: string;
    /**
     * 描述信息。
     * 长度为2~256个字符，必须以字母或中文开头，但不能以http://或https://开头。
     * @example `testDescription`
     */
    "Description"?: string;
}
