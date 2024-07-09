export interface QueryGroupedSecurityEventMarkMissListRequest {
    /**
     * 告警事件名称（子类型）。
     * @example `Login with unusual location`
     */
    "EventName"?: string;
    /**
     * 资产检索项。取值：
     * - 资产IP
     * - 公网IP
     * - 内网IP
     * - 资产名称
     * @example `222.185.XX.XX`
     */
    "Remark"?: string;
    /**
     * 请求和接收消息的语言类型。默认**zh**，取值包括：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，每页显示的白名单规则数量。默认值为**20**，表示每页显示20条白名单规则。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 请求来源标识，固定为sas。
     * @example `sas`
     */
    "From"?: string;
    /**
     * 访问源的IP地址。
     * @example `113.66.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 处置方式。取值：
     * - **1**：自动加白
     * - **2**：仅防御不通知
     * @example `1`
     */
    "DisposalWay"?: string;
}
