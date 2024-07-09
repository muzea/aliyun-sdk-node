export interface CreateIPv6TranslatorAclListRequest {
    /**
     *  IPv6转换服务实例的地域。 您可以通过调用 DescribeRegions接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     *
     * @example `sha123456`
     */
    "ClientToken"?: string;
    /**
     *  访问控制策略组名称。
     * @example `test`
     */
    "AclName": string;
}
