export interface ListConnectionPoolIpsRequest {
    /**
     * 用来标记当前开始读取的位置，置空表示从头开始。
     * > 第一次调用不用填写，会在返回结果中包含第二次调用时用的NextToken，之后每次调用返回结果中都有下一次调用时的NextToken。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 分页大小，取值：**1**~**2000**。传入为空时，默认值为**10**。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 云连接器实例所在的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云连接器实例ID。
     * @example `iotcc-bp1odcab8tmno0hdq****`
     */
    "IoTCloudConnectorId"?: string;
    /**
     * 连接地址池的ID。
     * @example `cp-bp11234abctmno0hdq****`
     */
    "ConnectionPoolId"?: string;
    /**
     * 连接地址池中的IP地址。
     * @example `192.168.XX.XX`
     */
    "Ip"?: string;
}
