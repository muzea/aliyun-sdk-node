export interface DescribeDomainAttackEventsResponse {
    /**
     * 攻击事件的总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次请求的ID。
     * @example `C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E`
     */
    RequestId: string;
    /**
     * 网站业务DDoS攻击事件信息。
     */
    DomainAttackEvents: {
        /**
         * 攻击结束时间。时间戳格式，单位：秒。
         * @example `1560320160`
         */
        EndTime: number;
        /**
         * 攻击开始时间。时间戳格式，单位：秒。
         * @example `1560312900`
         */
        StartTime: number;
        /**
         * 被攻击域名。
         * @example `www.aliyun.com`
         */
        Domain: string;
        /**
         * 攻击峰值QPS。
         * @example `1000`
         */
        MaxQps: number;
    }[];
}
