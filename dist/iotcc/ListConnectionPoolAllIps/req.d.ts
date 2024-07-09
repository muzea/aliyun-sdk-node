export interface ListConnectionPoolAllIpsRequest {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值：**1**~**50**。默认值：**10**。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 云连接器实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云连接器实例ID。
     * @example `iotcc-bp1odcab8tmno0hdq****`
     */
    "IoTCloudConnectorId": string;
    /**
     * 要查询的连接地址池ID。
     * @example `cp-bp11234abctmno0hdq****`
     */
    "ConnectionPoolId": string;
    /**
     * 连接地址池中的IP地址。
     * @example `192.168.0.1`
     */
    "Ip"?: string;
    /**
     * 连接地址池中IP地址类型。取值：
     * - **Cidr**：连接地址池所属的CIDR地址块。
     * - **Host**：物联网卡的IP地址。
     * @example `Cidr`
     */
    "Type"?: string;
}
