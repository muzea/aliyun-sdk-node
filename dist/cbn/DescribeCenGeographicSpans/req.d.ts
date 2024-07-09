export interface DescribeCenGeographicSpansRequest {
    /**
     * 查询页码。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页显示的条目数。默认值为**10**，取值范围：**1**~**50**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 互通区域ID。
     * > 如果您不输入本参数，系统默认会帮您查询云企业网支持的所有互通区域信息。
     * @example `china_asia-pacific`
     */
    "GeographicSpanId"?: string;
}
