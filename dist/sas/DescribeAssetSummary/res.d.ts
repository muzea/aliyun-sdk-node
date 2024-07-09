export interface DescribeAssetSummaryResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `0FA7F1F4-488D-52CA-9BFC-3E47793B49D1`
     */
    RequestId: string;
    /**
     * 资产统计信息。
     */
    AssetsSummary: {
        /**
         * 当前地域资产总核数。
         * @example `1022`
         */
        TotalCoreNum: number;
        /**
         * 所有地域资产总数。
         * @example `2064`
         */
        TotalAssetAllRegion: number;
        /**
         * 所有地域资产总核数。
         * @example `3200`
         */
        TotalCoreAllRegion: number;
    };
}
