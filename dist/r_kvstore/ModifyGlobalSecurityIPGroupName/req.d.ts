export interface ModifyGlobalSecurityIPGroupNameRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 修改后的IP白名单模板名称。IP白名单模板名称需满足如下要求：
     * - 由小写字母、数字、下划线（_）组成。
     * - 由字母开头、字母或数字结尾。
     * - 长度为2~120个字符。
     * @example `test_123`
     */
    "GlobalIgName": string;
    /**
     * IP白名单模板ID，您可以调用[DescribeGlobalSecurityIPGroup](~~2400079~~)接口获取该参数。
     * @example `g-kd2iop4aur9qwxnvh***`
     */
    "GlobalSecurityGroupId": string;
    /**
     * 资源组ID。
     * @example `rg-acfmyiu4ekp****`
     */
    "ResourceGroupId"?: string;
}
