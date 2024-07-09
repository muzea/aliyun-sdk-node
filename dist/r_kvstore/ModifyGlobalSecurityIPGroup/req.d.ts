export interface ModifyGlobalSecurityIPGroupRequest {
    /**
     * 资源组ID。
     * @example `rg-acfmyiu4ekp****`
     */
    "ResourceGroupId"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IP白名单模板名称。IP白名单模板名称需满足如下要求：
     * - 由小写字母、数字、下划线（_）组成。
     * - 由字母开头、字母或数字结尾。
     * - 长度为2~120个字符。
     * > 本参数将覆盖原值。
     * @example `test_123`
     */
    "GlobalIgName": string;
    /**
     * IP白名单模板ID。
     * @example `g-zsldxfiwjmti0kcm****`
     */
    "GlobalSecurityGroupId": string;
    /**
     * IP白名单模板内的IP地址。
     * > 本参数将覆盖原值。
     * @example `192.168.0.1,10.10.10.10,172.16.0.1`
     */
    "GIpList": string;
}
