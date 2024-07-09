export interface CheckServiceStatusRequest {
    /**
     * 阿里云ServiceCode。 Arms Prometheus对应的ServiceCode为prometheus。
     * @example `prometheus`
     */
    "SvcCode": string;
    /**
     * 地域ID。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
}
