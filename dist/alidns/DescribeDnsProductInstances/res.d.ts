export interface DescribeDnsProductInstancesResponse {
    /**
     * 本次查询获取的付费版DNS产品实例数量。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 域名类型，取值：
     * - PUBLIC：权威托管域名（默认值）
     * - CACHE：权威代理域名
     * @example `PUBLIC`
     */
    DomainType: string;
    /**
     * 本次查询获取的域名数量。
     * @example `2`
     */
    PageSize: number;
    /**
     * 唯一请求识别码。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    PageNumber: number;
    DnsProducts: {
        /**
         * 本次获取的付费版DNS产品实例列表。
         */
        DnsProduct: {
            /**
             * 海外解析请求来源线路。
             * @example `海外大洲`
             */
            OverseaLine: string;
            /**
             * 预付费。
             * @example `Subscription`
             */
            PaymentType: string;
            /**
             * 监控节点个数（个）。
             * @example `5`
             */
            MonitorNodeCount: number;
            /**
             * 域名是否处于黑洞状态。
             * @example `false`
             */
            InBlackHole: boolean;
            /**
             * 适用于个人版、企业标准版、企业旗舰版用户调用，指付费版DNS实例已绑定使用的域名个数。
             * @example `3`
             */
            BindDomainUsedCount: number;
            /**
             * 运营商解析请求来源线路细分列表。
             * @example `电信（省份）、移动（省份）、联通（省份）、教育网（省份）`
             */
            ISPRegionLines: string;
            /**
             * 最小TTL值（秒）。
             * @example `10`
             */
            TTLMinValue: number;
            /**
             * 运营商解析请求来源线路列表。
             * @example `电信、移动、联通、教育网`
             */
            ISPLines: string;
            /**
             * 搜索引擎解析请求来源线路列表。
             * @example `搜索引擎、谷歌、百度、必应`
             */
            SearchEngineLines: string;
            /**
             * 实例到期时间（时间戳）。
             * @example `1474335170000`
             */
            EndTimestamp: number;
            /**
             * 云解析产品版本名称。
             * @example `企业旗舰版`
             */
            VersionName: string;
            /**
             * 云解析产品code。
             * @example `version1`
             */
            VersionCode: string;
            /**
             * 监控任务数（个）。
             * @example `2`
             */
            MonitorTaskCount: number;
            /**
             * 适用于定制版用户调用，指付费版DNS实例已使用的更换域名次数。
             * @example `1`
             */
            BindUsedCount: number;
            /**
             * 绑定域名。
             * @example `example.com`
             */
            Domain: string;
            /**
             * 监控频率（单位:分钟）。
             * @example `50`
             */
            MonitorFrequency: number;
            /**
             * 域名是否处于清洗状态。
             * @example `false`
             */
            InClean: boolean;
            /**
             * URL转发数量（个）。
             * @example `20`
             */
            URLForwardCount: number;
            /**
             * 实例购买时间（时间戳）。
             * @example `1474335170000`
             */
            StartTimestamp: number;
            /**
             * 适用于定制版用户调用，DNS防护QPS（万qps）。
             * @example `50`
             */
            DDosDefendQuery: number;
            /**
             * 云解析产品ID。
             * @example `i-8fj`
             */
            InstanceId: string;
            /**
             * DNS防护流量（G）。
             * @example `50`
             */
            DDosDefendFlow: number;
            /**
             * 适用于定制版用户调用，指付费版DNS实例可支持更换域名次数。
             * @example `3`
             */
            BindCount: number;
            /**
             * 子域名级别（个）。
             * @example `6`
             */
            SubDomainLevel: number;
            /**
             * 适用于个人版、企业标准版、企业旗舰版用户调用，指付费版DNS实例可以绑定的域名个数。
             * @example `5`
             */
            BindDomainCount: number;
            /**
             * 实例到期时间。
             * @example `2015-12-12T00:00Z`
             */
            EndTime: string;
            /**
             * 实例购买时间。
             * @example `2015-11-12T09:23Z`
             */
            StartTime: string;
            /**
             * 海外DNS防护（G）。
             * @example `1`
             */
            OverseaDDosDefendFlow: number;
            /**
             * 是否允许地域解析请求来源线路。
             * @example `true`
             */
            RegionLines: boolean;
            /**
             * 是否允许GSLB。
             * @example `true`
             */
            Gslb: boolean;
            /**
             * DNS安全。取值：
             * - **no**：不需要
             * - **basic**：dns攻击基础防御
             * - **advanced**：dns攻击全力防御
             * @example `no`
             */
            DnsSecurity: string;
            /**
             * 负载均衡（单域名、单线路的IP地址容量）。
             * @example `15`
             */
            DnsSLBCount: number;
            /**
             * 续费状态。
             * - **true**：自动续费类型。
             * - **false**：非自动续费类型。
             * @example `true`
             */
            AutoRenewal: boolean;
        }[];
    };
}
