export interface DescribeDnsGtmMonitorConfigResponse {
    /**
     * 唯一请求识别码。
     * @example `6856BCF6-11D6-4D7E-AC53-FD579933522B`
     */
    RequestId: string;
    /**
     * 超时时间。单位毫秒。
     * @example `3000`
     */
    Timeout: number;
    /**
     * 检查协议：
     * - HTTP
     * - HTTPS
     * - PING
     * - TCP
     * @example `TCP`
     */
    ProtocolType: string;
    IspCityNodes: {
        /**
         * 监控节点列表。
         */
        IspCityNode: {
            /**
             * 城市编码。
             * @example `572`
             */
            CityCode: string;
            /**
             * 国家展示名。
             * @example `中国`
             */
            CountryName: string;
            /**
             * 运营商编码。
             * @example `123`
             */
            IspCode: string;
            /**
             * 城市展示名。
             * @example `青岛市`
             */
            CityName: string;
            /**
             * 国家编码。
             * @example `001`
             */
            CountryCode: string;
            /**
             * 运营商名称。
             * @example `阿里巴巴`
             */
            IspName: string;
        }[];
    };
    /**
     * 创建时间。
     * @example `2017-12-28T13:08Z`
     */
    CreateTime: string;
    /**
     * 更新时间。
     * @example `2018-01-03T08:57Z`
     */
    UpdateTime: string;
    /**
     * 连续失败次数。
     * @example `3`
     */
    EvaluationCount: number;
    /**
     * 更新时间（时间戳）。
     * @example `1527690629357`
     */
    UpdateTimestamp: number;
    /**
     * 扩展信息，各协议检查所需参数：
     * - HTTP(S)：
     * 	- port：检查端口
     * 	- host：Host设置
     * 	- path：URL路径
     * 	- code：返回码大于
     * 	- failureRate：失败率
     * 	- sni：是否开启sni，仅在HTTPS协议时使用。
     * 	    - true-开启
     * 	    - false-未开启
     * 	- nodeType：地址池类型为DOMAIN时，健康检查监控节点类型：
     * 	    - IPV4
     * 	    - IPV6
     * - PING：
     * 	- failureRate：失败率
     * 	- packetNum：ping包数
     * 	- packetLossRate：ping丢包率
     * 	- nodeType：地址池类型为DOMAIN时，健康检查监控节点类型：
     * 	    - IPV4
     * 	    - IPV6
     * - TCP：
     * 	- port：检查端口
     * 	- failureRate：失败率
     * 	- nodeType：地址池类型为DOMAIN时，健康检查监控节点类型：
     * 	    - IPV4
     * 	    - IPV6
     * @example `{\"code\":200,\"path\":\"\\index.htm\",\"host\":\"aliyun.com\"}`
     */
    MonitorExtendInfo: string;
    /**
     * 健康检查配置id。
     * @example `MonitorConfigId1`
     */
    MonitorConfigId: string;
    /**
     * 创建时间（时间戳）。
     * @example `1527690629357`
     */
    CreateTimestamp: number;
    /**
     * 检查间隔，单位秒。
     * @example `1`
     */
    Interval: number;
}
