export interface DescribeGtmAccessStrategyAvailableConfigResponse {
    /**
     * 唯一请求识别码。
     * @example `C2851BA9-CE56-49AF-8D12-4FC6A49EE688`
     */
    RequestId: string;
    AddrPools: {
        /**
         * 地址池列表。
         */
        AddrPool: {
            /**
             * 地址池ID。
             * @example `hra0ix`
             */
            AddrPoolId: string;
            /**
             * 地址池名称。
             * @example `test`
             */
            AddrPoolName: string;
        }[];
    };
    Lines: {
        /**
         * 解析请求来源列表。
         */
        Line: {
            /**
             * 线路当前状态。其中：
             * - **FORBIDDEN**：不可选
             * - **OPTIONAL**：可选择
             * @example `FORBIDDEN`
             */
            Status: string;
            /**
             * 父线路的code，如果没有则为空。
             * @example `无`
             */
            FatherCode: string;
            /**
             * 解析请求来源编码。
             * @example `cn_region_huanan`
             */
            LineCode: string;
            /**
             * 解析请求来源分组名称。
             * @example `Mainland China`
             */
            GroupName: string;
            /**
             * 解析请求来源名称。
             * @example `South China`
             */
            LineName: string;
            /**
             * 解析请求来源分组编号。
             * @example `CN_REGION`
             */
            GroupCode: string;
        }[];
    };
    /**
     * 建议设置全局线路。
     * @example `True`
     */
    SuggestSetDefaultLine: boolean;
}
