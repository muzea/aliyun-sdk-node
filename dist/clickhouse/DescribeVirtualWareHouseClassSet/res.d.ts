export interface DescribeVirtualWareHouseClassSetResponse {
    /**
     * 计算组规格。
     */
    Data: {
        /**
         * 计算组规格码。
         * @example `n1.2xlarge`
         */
        Value: string;
        /**
         * 计算组的CPU规格，单位：核。
         * @example `16`
         */
        CpuCores: number;
        /**
         * 计算组的内存规格，单位：GB。
         * @example `64`
         */
        MemoryGiB: number;
        /**
         * 计算组的最小缓存空间，单位：GB。
         * @example `200`
         */
        MinCacheStorage: number;
        /**
         * 计算组的最大缓存空间，单位：GB。
         * @example `32000`
         */
        MaxCacheStorage: number;
        /**
         * 缓存空间的调整步长，单位：GB。
         * @example `100`
         */
        CacheStorageStep: number;
    }[];
    /**
     * 请求ID。
     * @example `F5178C10-1407-4987-9133-DE4DC9119F75`
     */
    RequestId: string;
}
