export interface ListCardsRequest {
    /**
     * 5G高速上云实例id。
     * @example `cc5g-xxxx`
     */
    "WirelessCloudConnectorId": string;
    /**
     * 卡的状态列表。
     */
    "Statuses"?: string[];
    /**
     * 物联网卡的iccid列表。
     */
    "Iccids"?: string[];
    /**
     * 物联网卡的固定IP地址。
     * @example `10.0.0.1`
     */
    "IpAddress"?: string;
    /**
     * 卡是否锁定。
     * @example `true`
     */
    "Lock"?: boolean;
    /**
     * 卡是否在线。
     * @example `true`
     */
    "Online"?: boolean;
    /**
     * 网络连接id。
     * @example `cciot-xxxx`
     */
    "NetLinkId"?: string;
    /**
     * 运营商APN的id。
     * @example `bjaliyun01s.5gbj.bjiot`
     */
    "Apn"?: string;
    /**
     * 上一页的查询返回的值，首页查询不传值。
     * @example `iou001238joojjaere`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 卡的iccid的前缀，如果后缀包含字符会去除字符。
     * @example `8909123123121912`
     */
    "Iccid"?: string;
    /**
     * 物联网卡的MSISDN。
     * @example `1441204374591`
     */
    "Msisdn"?: string;
}
