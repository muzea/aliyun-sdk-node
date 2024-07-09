export interface DescribeResourceQuotaResponse {
    /**
     * 唯一请求ID。
     * @example `C293BB03-B6AD-46C2-80D1-19C8FB573916`
     */
    RequestId: string;
    /**
     * 静态网站容量阈值，单位GB 。
     * @example `2`
     */
    StaticWebDataSizeQuota: number;
    /**
     * 云存储容量阈值，单位GB。
     * @example `10`
     */
    CloudStorageDataSizeQuota: number;
}
