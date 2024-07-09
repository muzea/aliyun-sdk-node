export interface DescribeSitePairResponse {
    /**
     * 站点对类型
     * @example `cloud2cloud`
     */
    SitePairType: string;
    /**
     * 请求是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 从站站点ID
     * @example `si-0007rvzart0a2wpup82m`
     */
    SecondarySiteId: string;
    /**
     * 主站站点ID
     * @example `si-0001jntih0phb0i2w1ya`
     */
    PrimarySiteId: string;
    /**
     * 请求ID
     * @example `700F1972-16A2-5639-A937-D2A6D61557B8`
     */
    RequestId: string;
    /**
     * 版本号
     * @example `3.7.3`
     */
    Version: string;
    /**
     * 状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 站点对ID
     * @example `s-000j6lhiuvdqakqa6k7l`
     */
    SitePairId: string;
    /**
     * 从站站点名称
     * @example `杭州D区`
     */
    SecondarySiteName: string;
    /**
     * 创建时间
     * @example `1637293095`
     */
    CreatedTime: number;
    /**
     * 主站站点名称
     * @example `杭州F区`
     */
    PrimarySiteName: string;
}
