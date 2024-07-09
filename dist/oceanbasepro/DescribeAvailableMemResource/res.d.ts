export interface DescribeAvailableMemResourceResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 可用的内存资源信息。
     */
    Data: {
        /**
         * 单个 unit 最小需要申请的内存大小，单位：GB。
         * @example `5`
         */
        MinMem: number;
        /**
         * 单个 unit 最大可申请的内存大小，单位：GB。
         * @example `10`
         */
        MaxMem: number;
        /**
         * 租户的 unit 个数。
         * @example `2`
         */
        UsedMem: number;
        /**
         * 内存安全水位。
         * @example `10.0`
         */
        SafeMem: string;
    };
}
