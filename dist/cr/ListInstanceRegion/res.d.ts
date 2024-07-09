export interface ListInstanceRegionResponse {
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 调用是否成功，取值：
     * - `true`：调用成功
     * - `false`：调用失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `11F182E1-0F84-4F5B-8D3B-61E991482727`
     */
    RequestId: string;
    /**
     * 地区列表
     */
    Regions: {
        /**
         * 地区名称
         * @example `华南1（深圳）`
         */
        LocalName: string;
        /**
         * 地区ID
         * @example `cn-shenzhen`
         */
        RegionId: string;
    }[];
}
