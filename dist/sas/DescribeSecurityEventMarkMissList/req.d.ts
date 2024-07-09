export interface DescribeSecurityEventMarkMissListRequest {
    /**
     * 访问源的IP地址。
     * @example `125.210.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 告警事件名称（子类型）。
     * @example `Login with unusual location`
     */
    "EventName"?: string;
    /**
     * 资产检索项。可填写资产的IP、公网IP、内网IP、资产名称进行模糊匹配。
     * @example `192.168.XX.XX`
     */
    "Remark"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页查询时，每页显示的白名单规则数量。默认值为**20**，表示每页显示20条白名单规则。
     * @example `20`
     */
    "PageSize": number;
}
