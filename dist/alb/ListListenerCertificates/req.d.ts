export interface ListListenerCertificatesRequest {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 本次读取的最大数据记录。取值范围：**1~100**。入参为空时，默认值为**20**。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 监听ID。HTTPS和QUIC监听有效。
     * @example `lsn-5qnirjhpt******`
     */
    "ListenerId": string;
    /**
     * 证书类型。取值：**Ca**或**Server**。
     * @example `Server`
     */
    "CertificateType"?: string;
    /**
     * 证书id列表
     */
    "CertificateIds"?: string[];
}
