export interface AddGtmAddressPoolRequest {
    /**
     * 用户语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 实例ID。
     * @example `gtm-cn-xxxxxxx`
     */
    "InstanceId": string;
    /**
     * 地址池名称。
     * @example `测试`
     */
    "Name": string;
    /**
     * 地址池类型。取值：
     * - **IP**：IPv4地址
     * - **DOMAIN**：域名
     * @example `IP`
     */
    "Type": string;
    /**
     * 最小可用地址数量。
     * @example `1`
     */
    "MinAvailableAddrNum": number;
    /**
     * 健康检查开启状态。取值：
     * - **OPEN**：开启
     * - **CLOSE**（默认）：关闭
     * @example `OPEN`
     */
    "MonitorStatus"?: string;
    /**
     * 检查协议。取值：
     * - HTTP
     * - HTTPS
     * - Ping
     * - TCP
     * @example `TCP`
     */
    "ProtocolType"?: string;
    /**
     * 检查间隔，单位：秒，取值范围：60。
     * @example `60`
     */
    "Interval"?: number;
    /**
     * 连续失败次数。
     * @example `2`
     */
    "EvaluationCount"?: number;
    /**
     * 超时时间，单位：毫秒，取值范围：2000、3000、5000、10000。
     * @example `5000`
     */
    "Timeout"?: number;
    /**
     * 扩展信息。根据不同协议，进行传参：
     * HTTP、HTTPS：
     *
     * - port：检查端口
     * - failureRate：失败比例
     * - code：返回码（大于此值会被判定为异常）。取值：400、500。
     * - host：Host设置
     * - path：URL路径
     * PING:
     * - packetNum：ping包数目
     * - packetLossRate：丢包率
     * - failureRate：失败比例
     * TCP：
     * - port：检查端口
     * - failureRate：失败比例
     * @example `{"host":"aliyun.com","port":80}`
     */
    "MonitorExtendInfo"?: string;
    /**
     * 地址池列表。
     */
    "Addr": {
        /**
         * 地址池地址。
         * @example `1.1.XX.XX`
         */
        Value: string;
        /**
         * 地址池权重。
         * @example `1`
         */
        LbaWeight: number;
        /**
         * 地址池模式。取值：
         * - **SMART**：智能返回
         * - **ONLINE**：永远在线
         * - **OFFLINE**：永远离线
         * @example `SMART`
         */
        Mode: string;
    }[];
    /**
     * 监控城市节点列表。
     */
    "IspCityNode"?: {
        /**
         * 监控节点的城市Code。具体取值请参考DescribeGtmMonitorAvailableConfig的返回值。
         * @example `546`
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
