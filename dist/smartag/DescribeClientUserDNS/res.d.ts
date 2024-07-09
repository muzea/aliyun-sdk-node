export interface DescribeClientUserDNSResponse {
    AppDNS: string[];
    /**
     * 请求ID。
     * @example `894AA8BD-0627-45B1-AA18-9CE1D50DA9D0`
     */
    RequestId: string;
    RecoveredDNS: string[];
}
