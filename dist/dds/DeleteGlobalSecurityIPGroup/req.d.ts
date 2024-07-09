export interface DeleteGlobalSecurityIPGroupRequest {
    /**
     * 地域ID，您可以调用[DescribeRegions](~~61933~~)查询。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IP白名单模板名称。IP白名单模板名称需满足如下要求：
     * - 由小写字母、数字、下划线（_）组成。
     * - 由字母开头、字母或数字结尾。
     * - 长度为2~120个字符。
     * @example `corp`
     */
    "GlobalIgName"?: string;
    /**
     * IP白名单模板ID。
     * @example `g-qxieqf40xjst1ngpr3jz`
     */
    "GlobalSecurityGroupId": string;
}
