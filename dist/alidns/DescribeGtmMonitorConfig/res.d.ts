export interface DescribeGtmMonitorConfigResponse {
    /**
     * 唯一请求识别码。
     * @example `6856BCF6-11D6-4D7E-AC53-FD579933522B`
     */
    RequestId: string;
    /**
     * 超时时间，单位：毫秒，取值范围：2000、3000、5000、10000。
     * @example `3000`
     */
    Timeout: number;
    /**
     * 检查协议。
     * @example `HTTP`
     */
    ProtocolType: string;
    IspCityNodes: {
        /**
         * 监控节点列表。
         */
        IspCityNode: {
            /**
             * 城市编码。
             * @example `503`
             */
            CityCode: string;
            /**
             * 国家展示名。
             * @example `中国`
             */
            CountryName: string;
            /**
             * 运营商Code。
             * @example `465`
             */
            IspCode: string;
            /**
             * 城市展示名。
             * @example `张家口市`
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
     * @example `2017-12-28T13:08Z`
     */
    UpdateTime: string;
    /**
     * 连续次数。
     * @example `3`
     */
    EvaluationCount: number;
    /**
     * 更新时间（时间戳）。
     * @example `1527690629357`
     */
    UpdateTimestamp: number;
    /**
     * 扩展信息。根据不同协议，进行传参：
     * HTTP、HTTPS：
     * - port：检查端口
     * - failureRate：失败率
     * - code：返回码（大于此值会被判定为异常）。取值：400、500。
     * - host：Host设置
     * - path：URL路径
     * PING:
     * - packetNum：ping包数
     * - packetLossRate：ping丢包率
     * - failureRate：失败率
     * TCP：
     * - port：检查端口
     * - failureRate：失败率
     * @example `{\"code\":200,\"path\":\"\\index.htm\",\"host\":\"aliyun.com\"}`
     */
    MonitorExtendInfo: string;
    /**
     * 健康检查配置ID。
     * @example `1234abc`
     */
    MonitorConfigId: string;
    /**
     * 创建时间（时间戳）。
     * @example `1527690629357`
     */
    CreateTimestamp: number;
    /**
     * 检查间隔，单位：秒，取值范围：60。
     * @example `60`
     */
    Interval: number;
}
