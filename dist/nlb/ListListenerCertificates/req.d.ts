export interface ListListenerCertificatesRequest {
    /**
     * 监听ID。仅TCPSSL监听有效。
     * @example `lsn-j49ht1jxxqyg45****@80`
     */
    "ListenerId": string;
    /**
     * 证书类型。
     * - **Ca**：CA证书。
     * - **Server**：服务器证书。
     * @example `Ca`
     */
    "CertType"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 网络型负载均衡实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~443657~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
