export interface DescribeDomainInfoResponse {
    /**
     * 树形化解析请求来源线路列表。
     * @example `{"default":{},"unicom":{},"telecom":{},"mobile":{},"edu":{},"oversea":{},"baidu":{},"biying":{},"google":{}}`
     */
    RecordLineTreeJson: string;
    /**
     * 域名分组名称。
     * @example `mygroup`
     */
    GroupName: string;
    /**
     * 是否在黑洞中。
     * @example `false`
     */
    InBlackHole: boolean;
    /**
     * 是否是地域线路。
     * @example `false`
     */
    RegionLines: boolean;
    /**
     * 是否允许有辅助dns。
     * @example `true`
     */
    SlaveDns: boolean;
    /**
     * 是否为阿里云万网域名。
     * @example `true`
     */
    AliDomain: boolean;
    /**
     * 唯一请求识别码。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 资源组ID。
     * @example `rg-aek3dj3wvclgcxo`
     */
    ResourceGroupId: string;
    /**
     * 云解析产品ID。
     * @example `i-7bg`
     */
    InstanceId: string;
    /**
     * 域名名称。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 创建时间。
     * @example `2015-12-12T09:23Z`
     */
    CreateTime: string;
    /**
     * 只针对中文域名返回punycode码。
     * @example `example.com`
     */
    PunyCode: string;
    DnsServers: {
        /**
         * 域名在解析系统中的DNS列表
         */
        DnsServer: string[];
    };
    /**
     * 备注。
     * @example `remark`
     */
    Remark: string;
    /**
     * 域名分组ID。
     * @example `2223`
     */
    GroupId: string;
    /**
     * 云解析版本ID。
     * @example `version1`
     */
    VersionCode: string;
    RecordLines: {
        /**
         * 解析请求来源线路数据列表。
         */
        RecordLine: {
            /**
             * 父线路Code，如果没有则为空。
             * @example `internal`
             */
            FatherCode: string;
            /**
             * 父线路展示名。
             * @example `中国地区_西北`
             */
            LineDisplayName: string;
            /**
             * 子线路Code。
             * @example `cn_region_xibei`
             */
            LineCode: string;
            /**
             * 子线路展示名。
             * @example `西北`
             */
            LineName: string;
        }[];
    };
    /**
     * 域名ID。
     * @example `00efd71a-770e-4255-b54e-6fe5659baffe`
     */
    DomainId: string;
    AvailableTtls: {
        /**
         * 域名当前可用TTL列表。默认不返回，需要设置NeedDetailAttributes=true。
         */
        AvailableTtl: string[];
    };
    /**
     * 最小TTL。
     * @example `1`
     */
    MinTtl: number;
    /**
     * 是否在清洗中。
     * @example `false`
     */
    InClean: boolean;
    /**
     * 云解析产品名称。
     * @example `企业旗舰版`
     */
    VersionName: string;
    /**
     * 解析请求来源线路类型。
     * @example `region_province`
     */
    LineType: string;
    /**
     * 查询的 domain 是否是托管的子域名。
     * 取值：
     * - true
     * - false
     * @example `false`
     */
    SubDomain: boolean;
    /**
     * 日志开关状态
     * @example `CLOSE：关闭状态
    OPEN：开启状态`
     */
    DomainLoggingSwitchStatus: string;
}
