export interface UpdateGtmMonitorRequest {
    /**
     * 用户语言
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 健康检查配置ID
     * @example `1234abc`
     */
    "MonitorConfigId": string;
    /**
     * 检查协议
     * @example `HTTP`
     */
    "ProtocolType": string;
    /**
     * 检查间隔，单位：秒，取值范围：60。
     * @example `60`
     */
    "Interval"?: number;
    /**
     * 连续次数
     * @example `3`
     */
    "EvaluationCount"?: number;
    /**
     * 超时时间，单位：毫秒，取值范围：2000、3000、5000、10000。
     * @example `3000`
     */
    "Timeout"?: number;
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
    "MonitorExtendInfo": string;
    /**
     * 监控城市节点列表。
     */
    "IspCityNode": {
        /**
         * 城市Code
         * @example `572`
         */
        CityCode: string;
        /**
         * - 具体取值可参考：DescribeGtmMonitorAvailableConfig接口返回数据。
         * - GroupType为BGP或Overseas时，IspCityNode.N.IspCode为非必传值，默认为465。
         * - GroupType为非BGP或Overseas时，IspCityNode.N.IspCode为必传值。并与IspCityNode.N.CityCode匹配使用。
         * @example `465`
         */
        IspCode: string;
    }[];
}
