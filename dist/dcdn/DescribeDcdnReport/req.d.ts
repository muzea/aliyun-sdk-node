export interface DescribeDcdnReportRequest {
    /**
     * 待查询的域名列表，多个域名用英文逗号（,）分隔。
     * @example `www.example.com,www.example.org`
     */
    "DomainName"?: string;
    /**
     * 待查询的报表ID，每次调用仅支持传入单个报表ID。您可以调用[DescribeDcdnSubList](~~270075~~)接口查询报表ID。
     * @example `2`
     */
    "ReportId": number;
    /**
     * 地域英文名，您可以调用[DescribeDcdnRegionAndIsp](~~207199~~)接口获取地域英文名。
     * - 如果不传该参数，默认查询全部地域。
     * - 如果传入指定地域，则按照指定的地域获取相应数据。支持传入多个地域，多个地域用英文逗号（,）分隔。
     * @example `shanghai`
     */
    "Area"?: string;
    /**
     * 是否为中国内地以外的区域。取值：
     * - **1**：中国内地以外的区域。
     * - **0**：中国内地。
     * @example `0`
     */
    "IsOverseas"?: string;
    /**
     * HTTP状态码。取值：
     * - **2xx**：2xx状态码。
     * - **3xx**：3xx状态码。
     * - **4xx**：4xx状态码。
     * - **5xx**：5xx状态码。
     * 如果不传该参数，默认查询以上全部HTTP状态码。
     * @example `2xx`
     */
    "HttpCode"?: string;
    /**
     * 查询开始时间。使用UTC+0时间表示，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2021-07-02T00:00:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间。使用UTC+0时间表示，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2021-07-02T01:00:00Z`
     */
    "EndTime": string;
}
