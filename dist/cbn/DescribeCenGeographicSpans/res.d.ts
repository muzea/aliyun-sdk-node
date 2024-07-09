export interface DescribeCenGeographicSpansResponse {
    /**
     * 分页查询时每页显示的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `09780287-BC24-4164-8334-773432E32696`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总条目数。
     * @example `1`
     */
    TotalCount: number;
    GeographicSpanModels: {
        /**
         * 互通区域信息列表。
         */
        GeographicSpanModel: {
            /**
             * 本端区域ID。
             * @example `asia-pacific`
             */
            LocalGeoRegionId: string;
            /**
             * 互通区域ID。
             * @example `china_asia-pacific`
             */
            GeographicSpanId: string;
            /**
             * 对端区域ID。
             * @example `china`
             */
            OppositeGeoRegionId: string;
        }[];
    };
}
