export interface UpdateDnsGtmMonitorRequest {
    /**
     * 部分返回参数语言。默认值：en。取值范围：en、zh、ja。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 健康检查配置id。
     * @example `MonitorConfigId1`
     */
    "MonitorConfigId": string;
    /**
     * 检查协议：
     * - HTTP
     * - HTTPS
     * - PING
     * - TCP
     * @example `http`
     */
    "ProtocolType": string;
    /**
     * 检查间隔，单位秒。
     * @example `60`
     */
    "Interval"?: number;
    /**
     * 连续次数。
     * @example `2`
     */
    "EvaluationCount"?: number;
    /**
     * 超时时间，单位毫秒。
     * @example `30000`
     */
    "Timeout"?: number;
    /**
     * 扩展信息，各协议检查所需参数：
     * - HTTP(S)：
     * 	- port：检查端口
     * 	- host：Host设置
     * 	- path：URL路径
     * 	- code：返回码大于设定值时则认为健康检查异常，例如设置为400，当返回码为404时，判定健康检查结果异常。
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
    "MonitorExtendInfo": string;
    /**
     * 监控城市节点列表。
     */
    "IspCityNode": {
        /**
         * 监控节点-城市Code。
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
