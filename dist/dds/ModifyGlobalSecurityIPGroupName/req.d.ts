export interface ModifyGlobalSecurityIPGroupNameRequest {
    /**
     * 地域ID，您可以通过调用[DescribeRegions](~~61933~~)接口查询。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IP白名单模板名称。IP白名单模板名称需满足如下要求：
     * - 由小写字母、数字、下划线（_）组成。
     * - 由字母开头、字母或数字结尾。
     * - 长度为2~120个字符。
     * @example `prod_baoxian_k8s`
     */
    "GlobalIgName": string;
    /**
     * IP白名单模板ID。
     * @example `g-xmtncwkrzqqoe59dzljb`
     */
    "GlobalSecurityGroupId": string;
}
