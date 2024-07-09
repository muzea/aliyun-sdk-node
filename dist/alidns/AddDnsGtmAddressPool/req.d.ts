export interface AddDnsGtmAddressPoolRequest {
    /**
     * 部分返回参数语言。默认值：en。取值范围：en、zh、ja。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 实例Id。
     * @example `gtm-cn-cs02xyk4a**`
     */
    "InstanceId": string;
    /**
     * 地址池名称。
     * @example `test`
     */
    "Name": string;
    /**
     * 地址池类型：
     * - IPV4：ipv4地址
     * - IPV6: ipv6地址
     * - DOMAIN：域名
     * @example `IPV4`
     */
    "Type": string;
    /**
     * 负载均衡状态：
     * - ALL_RR：返回全部地址
     * - RATIO：按权重返回地址
     * @example `ALL_RR`
     */
    "LbaStrategy": string;
    /**
     * 健康检查开启状态（默认CLOSE），若OPEN则校验健康检查配置，否则抛弃
     * - OPEN：开启
     * - CLOSE：关闭
     * @example `OPEN`
     */
    "MonitorStatus"?: string;
    /**
     * 检查协议：
     * - HTTP
     * - HTTPS
     * - PING
     * - TCP
     * @example `TCP`
     */
    "ProtocolType"?: string;
    /**
     * 检查间隔，单位秒。
     * @example `60`
     */
    "Interval"?: number;
    /**
     * 连续失败次数。
     * @example `2`
     */
    "EvaluationCount"?: number;
    /**
     * 超时时间，单位毫秒。
     * @example `2000`
     */
    "Timeout"?: number;
    /**
     * 扩展信息，各协议检查所需参数：
     * - HTTP(S)：
     * 	- port：检查端口
     * 	- host：Host设置
     * 	- path：URL路径
     * 	- code：返回码大于
     * 	- failureRate：失败比例
     * 	- sni：是否开启sni，仅在HTTPS协议时使用。
     * 	    - true-开启
     * 	    - 其他-未开启
     * 	- nodeType：地址池类型为DOMAIN时，健康检查监控节点类型：
     * 	    - IPV4
     * 	    - IPV6
     * - PING：
     * 	- failureRate：失败比例
     * 	- packetNum：ping包数目
     * 	- packetLossRate：丢包率
     * 	- nodeType：地址池类型为DOMAIN时，健康检查监控节点类型：
     * 	    - IPV4
     * 	    - IPV6
     * - TCP：
     * 	- port：检查端口
     * 	- failureRate：失败比例
     * 	- nodeType：地址池类型为DOMAIN时，健康检查监控节点类型：
     * 	    - IPV4
     * 	    - IPV6
     * @example `{"failureRate":50,"port":80}`
     */
    "MonitorExtendInfo"?: string;
    /**
     * 地址池列表。
     */
    "Addr": {
        /**
         * 地址归属信息, JSON字符串格式。
         * - lineCode：归属线路Code
         * - lineCodeRectifyType：归属线路订正类型，默认：自动订正
         *     - NO_NEED 不订正
         *     - RECTIFIED 已订正
         *     - AUTO 自动订正
         * @example `{"lineCodeRectifyType":"AUTO", "lineCode":[]}`
         */
        AttributeInfo: string;
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
         * 地址。
         * @example `223.5.XX.XX`
         */
        Addr: string;
        /**
         * 模式：
         * - SMART：智能返回
         * - ONLINE：永远在线
         * - OFFLINE：永远离线
         * @example `SMART`
         */
        Mode: string;
    }[];
    /**
     * 监控城市节点列表。
     */
    "IspCityNode"?: {
        /**
         * 城市Code。
         * 具体取值可参考：DescribeGtmMonitorAvailableConfig接口返回数据。
         * @example `503`
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
