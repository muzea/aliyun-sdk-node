export interface DescribeUserCertificateExpireCountResponse {
    /**
     * 30天内证书即将过期的域名数。
     * @example `0`
     */
    ExpireWithin30DaysCount: number;
    /**
     * 请求ID。
     * @example `F5E8DF64-7175-4186-9B06-F002C0BBD0C5`
     */
    RequestId: string;
    /**
     * 证书已过期的域名数。
     * @example `6`
     */
    ExpiredCount: number;
}
