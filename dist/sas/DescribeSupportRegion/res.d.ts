export interface DescribeSupportRegionResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `2C0699D3-4107-5A46-A4C4-E129A5967788`
     */
    RequestId: string;
    /**
     * 支持地域列表。
     */
    SupportRegion: string[];
}
