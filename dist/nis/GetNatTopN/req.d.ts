export interface GetNatTopNRequest {
    /**
     * NAT网关实例所属地域ID。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * NAT网关实例ID。
     * @example `ngw-sample***`
     */
    "NatGatewayId": string;
    /**
     * 查询指标的开始毫秒时间戳。如果不指定**EndTime**，则查询的是**BeginTime**指定的时间点的情况。
     * @example `1638239092000`
     */
    "BeginTime": number;
    /**
     * 查询指标的结束毫秒时间戳。**BeginTime**和**EndTime**的最大差距不能超过24小时，即**86400000**。
     * @example `1638239093000`
     */
    "EndTime"?: number;
    /**
     * 对NAT网关进行SNAT转发实时数据排名的指标。取值：
     * -  **InBps**：入方向流量。单位：bps。
     * -  **OutBps**：出方向流量。单位：bps。
     * -  **InPps**：入方向包速率。单位：个/秒。
     * -  **OutPps**：出方向包速率。单位：个/秒。
     * -  **NewSessionPerSecond**：新建连接数。单位：个/秒。
     * -  **ActiveSessionCount**：并发连接数。单位：个。
     * @example `InBps`
     */
    "OrderBy"?: string;
    /**
     * 查询NAT网关的SNAT转发实时数据排名的条目数。取值范围：**1~100**。默认值：**10**。
     * @example `10`
     */
    "TopN"?: number;
    /**
     * 查询指定IP地址的监控指标。当输入Ip参数时，无需输入**TopN**和**OrderBy**。
     * @example `192.168.156.101`
     */
    "Ip"?: string;
}
