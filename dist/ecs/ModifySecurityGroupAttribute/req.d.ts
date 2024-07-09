export interface ModifySecurityGroupAttributeRequest {
    /**
     * 安全组ID。
     * @example `sg-bp67acfmxazb4p****`
     */
    "SecurityGroupId": string;
    /**
     * 安全组描述信息。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
     * 默认值：空
     * @example `TestDescription`
     */
    "Description"?: string;
    /**
     * 安全组名称。 长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * 默认值：空
     * @example `SecurityGroupTestName`
     */
    "SecurityGroupName"?: string;
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
