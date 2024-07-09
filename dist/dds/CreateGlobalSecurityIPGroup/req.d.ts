export interface CreateGlobalSecurityIPGroupRequest {
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
     * @example `aizy`
     */
    "GlobalIgName": string;
    /**
     * 白名单模板内的IP地址。
     * > 多个IP地址需要用英文逗号隔开，所有IP白名单累积支持添加1000个IP地址或地址段。
     * @example `27.18.86.18,183.92.40.129`
     */
    "GIpList": string;
}
