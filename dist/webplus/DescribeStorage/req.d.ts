export interface DescribeStorageRequest {
    /**
     * 是否使用共享OSS存储
     * @example `true`
     */
    "UsingSharedStorage"?: boolean;
    "RegionId"?: string;
}
