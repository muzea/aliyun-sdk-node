export interface ModifySecurityGroupAttributeRequest {
    /**
     * 安全组ID。
     * @example `sg-bp67acfmxazb4p****`
     */
    "SecurityGroupId": string;
    /**
     * 安全组名称。命名规则如下：
     * - 长度为2~128个英文或中文字符。
     * - 必须以大小字母或中文开头，不能以 http://和https://开头。
     * - 可以包含数字、英文冒号（:）、下划线（_）或者短划线（-）。
     * @example `example`
     */
    "SecurityGroupName"?: string;
    /**
     * 安全组信息描述。
     * @example `testDescription`
     */
    "Description"?: string;
}
