export interface ModifyElasticityAssuranceRequest {
    /**
     * 弹性保障服务所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 弹性保障服务ID。
     * @example `eap-bp67acfmxazb4****`
     */
    "PrivatePoolOptions.Id": string;
    /**
     * 弹性保障服务的名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * @example `eapTestName`
     */
    "PrivatePoolOptions.Name"?: string;
    /**
     * 弹性保障服务的描述信息。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
     * @example `This is description.`
     */
    "Description"?: string;
}
