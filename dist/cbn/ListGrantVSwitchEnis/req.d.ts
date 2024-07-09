export interface ListGrantVSwitchEnisRequest {
    /**
     * VPC实例连接的云企业网实例的ID。
     * @example `cen-a7syd349kne38g****`
     */
    "CenId": string;
    /**
     * VPC实例的ID。
     * @example `vpc-p0w9alkte4w2htrqe****`
     */
    "VpcId": string;
    /**
     * VPC实例下的一个交换机ID。
     * 一次仅支持查询一个交换机下的弹性网卡的信息。
     * @example `vsw-p0w9s2ig1jnwgrbzl****`
     */
    "VSwitchId": string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次 API 调用返回的 NextToken 值。
     * @example `AAAAAdDWBF2****`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页的最大条目数。取值范围：10~500。
     * 默认值：
     * - 当不设置值时，默认值为20。
     * - 当设置的值大于500时，默认值为500。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 弹性网卡ID。
     */
    "NetworkInterfaceId"?: string[];
    /**
     * 弹性网卡的名称。
     * @example `test-eni-name`
     */
    "NetworkInterfaceName"?: string;
    /**
     * 弹性网卡主私网IPv4地址。
     * @example `192.168.**.**`
     */
    "PrimaryIpAddress"?: string;
}
