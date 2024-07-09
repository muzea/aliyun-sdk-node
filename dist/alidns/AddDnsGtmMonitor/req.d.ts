export interface AddDnsGtmMonitorRequest {
    /**
     * 部分返回参数语言。默认值：en。取值范围：en、zh、ja。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 地址池id。
     * @example `pool1`
     */
    "AddrPoolId": string;
    /**
     * 检查协议：
     * - HTTP
     * - HTTPS
     * - PING
     * - TCP
     * @example `TCP`
     */
    "ProtocolType": string;
    /**
     * 检查间隔，单位秒。
     * @example `60`
     */
    "Interval": number;
    /**
     * 连续次数。
     * @example `1`
     */
    "EvaluationCount": number;
    /**
     * 超时时间，单位毫秒。
     * @example `3000`
     */
    "Timeout": number;
    /**
     * 扩展信息，各协议检查所需参数：
     * - HTTP(S)：
     * 	- port：检查端口
     * 	- host：Host设置
     * 	- path：URL路径
     * 	- code：返回码大于某个数值时则判定健康检查异常。
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
     * @example `该字段为JSON字符串
    {"failureRate":50,"port":80}`
     */
    "MonitorExtendInfo": string;
    /**
     * 监控城市节点列表。
     */
    "IspCityNode": {
        /**
         * 监控节点-城市code。
         * @example `123`
         */
        CityCode: string;
        /**
         * 监控节点-运营商code。
         * @example `123`
         */
        IspCode: string;
    }[];
}
