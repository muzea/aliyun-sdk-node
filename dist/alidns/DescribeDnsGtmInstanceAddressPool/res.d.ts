export interface DescribeDnsGtmInstanceAddressPoolResponse {
    Addrs: {
        /**
         * 地址池地址。
         */
        Addr: {
            /**
             * 更新时间（时间戳）。
             * @example `1527690629357`
             */
            UpdateTimestamp: number;
            /**
             * 地址归属信息。
             * - LineCode：归属线路code。（已废弃，以LineCodes数据为准）
             * - LineName：归属线路名称。（已废弃）
             * - LineCodes：归属线路列表。
             * @example `"LineCode":"aliyun_r_cn-zhangjiakou", "LineName": "阿里云_华北3（张家口）"，“LineCodes”：["aliyun_r_cn-zhangjiakou"]`
             */
            AttributeInfo: string;
            /**
             * 更新时间。
             * @example `2017-12-28T13:08Z`
             */
            UpdateTime: string;
            /**
             * 健康检查状态：
             * - OK：正常
             * - ALERT：报警
             * @example `OK`
             */
            AlertStatus: string;
            /**
             * 备注。
             * @example `test`
             */
            Remark: string;
            /**
             * 权重。
             * @example `1`
             */
            LbaWeight: number;
            /**
             * IP地址。
             * @example `1.1.XX.XX`
             */
            Addr: string;
            /**
             * 创建时间。
             * @example `2017-12-28T13:08Z`
             */
            CreateTime: string;
            /**
             * 模式：
             * - SMART：智能返回
             * - ONLINE：永远在线
             * - OFFLINE：永远离线
             * @example `SMART`
             */
            Mode: string;
            /**
             * 创建时间（时间戳）。
             * @example `1527690629357`
             */
            CreateTimestamp: number;
        }[];
    };
    /**
     * 唯一请求识别码。
     * @example `6856BCF6-11D6-4D7E-AC53-FD579933522B`
     */
    RequestId: string;
    /**
     * 负载均衡策略：
     * - ALL_RR: 返回全部地址
     * - RATIO：按权重返回地址
     * @example `ALL_RR`
     */
    LbaStrategy: string;
    /**
     * 创建时间。
     * @example `2017-12-28T13:08Z`
     */
    CreateTime: string;
    /**
     * 地址池数量。
     * @example `1`
     */
    AddrCount: number;
    /**
     * 地址池名称。
     * @example `test`
     */
    Name: string;
    /**
     * 地址池类型：
     * - IPV4：ipv4地址
     * - IPV6: ipv6地址
     * - DOMAIN：域名
     * @example `IPV4`
     */
    Type: string;
    /**
     * 更新时间。
     * @example `2017-12-28T13:08Z`
     */
    UpdateTime: string;
    /**
     * 地址池id。
     * @example `testpool1`
     */
    AddrPoolId: string;
    /**
     * 更新时间（时间戳）。
     * @example `1527690629357`
     */
    UpdateTimestamp: number;
    /**
     * 监控配置id。
     * @example `test1`
     */
    MonitorConfigId: string;
    /**
     * 监控状态：
     * - OPEN：开启
     * - CLOSE：关闭
     * - UNCONFIGURED：未配置
     * @example `OPEN`
     */
    MonitorStatus: string;
    /**
     * 创建时间（时间戳）。
     * @example `1527690629357`
     */
    CreateTimestamp: number;
}
