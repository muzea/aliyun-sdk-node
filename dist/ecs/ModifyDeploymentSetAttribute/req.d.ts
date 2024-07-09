export interface ModifyDeploymentSetAttributeRequest {
    /**
     * 部署集ID。
     * @example `ds-bp1frxuzdg87zh4p****`
     */
    "DeploymentSetId": string;
    /**
     * 新的部署集描述信息。长度为2~256个英文或中文字符，不能以http://和https://开头。
     * @example `TestDescription`
     */
    "Description"?: string;
    /**
     * 新的部署集名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * @example `DeploymentSetTestName`
     */
    "DeploymentSetName"?: string;
    /**
     * 部署集所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
