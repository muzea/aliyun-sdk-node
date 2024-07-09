export interface DescribeDomainOverviewResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E`
     */
    RequestId: string;
    /**
     * HTTP清洗峰值，单位：qps。
     * @example `41652`
     */
    MaxHttp: number;
    /**
     * HTTPS清洗峰值，单位：qps。
     * @example `0`
     */
    MaxHttps: number;
}
