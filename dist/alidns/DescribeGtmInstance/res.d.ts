export interface DescribeGtmInstanceResponse {
    /**
     * 实例到期时间（时间戳）。
     * @example `1528284856000`
     */
    ExpireTimestamp: number;
    /**
     * 用户域名。
     * @example `dns-example.top`
     */
    UserDomainName: string;
    /**
     * 唯一请求识别码。
     * @example `E41AA251-F9BA-48C6-99B2-2B82B26A573A`
     */
    RequestId: string;
    /**
     * 负载均衡策略。
     * - **ALL_RR**: 负载均摊
     * - **RATIO**: 加权轮询
     * @example `RATIO`
     */
    LbaStrategy: string;
    /**
     * GTM实例ID。
     * @example `gtm-cn-wwo3a3hbz**`
     */
    InstanceId: string;
    /**
     * 实例创建时间。
     * @example `2018-06-06T11:34Z`
     */
    CreateTime: string;
    /**
     * 当前接入方式。其中：
     * - **SYSTEM_ASSIGN**：系统分配
     * - **CUSTOM**：自定义
     * @example `CUSTOM`
     */
    CnameMode: string;
    /**
     * 全局TTL。
     * @example `60`
     */
    Ttl: number;
    /**
     * CNAME接入域名。
     * @example `gtm-cn-wwo3a3hbz**.dns-example.top`
     */
    Cname: string;
    /**
     * 实例名称。
     * @example `test`
     */
    InstanceName: string;
    /**
     * 版本Code。
     * @example `biaozhun`
     */
    VersionCode: string;
    /**
     * 报警组。
     * @example `[\"日常测试-研发组\"]`
     */
    AlertGroup: string;
    /**
     * 地址池个数。
     * @example `5`
     */
    AddressPoolNum: number;
    /**
     * 访问策略个数。
     * @example `5`
     */
    AccessStrategyNum: number;
    /**
     * 实例到期时间。
     * @example `2018-06-06T11:34Z`
     */
    ExpireTime: string;
    /**
     * 创建时间（时间戳）。
     * @example `1528284856000`
     */
    CreateTimestamp: number;
    /**
     * 资源组ID。
     * @example `rg-testgroupid`
     */
    ResourceGroupId: string;
}
