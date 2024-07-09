export interface GetTrafficByRegionResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 请求ID。
     * @example `26CF81F8-18F5-4F93-A1D6-33AAA592CF56`
     */
    RequestId: string;
    TrafficDataList: {
        /**
         * 数据列表。
         */
        TrafficData: {
            /**
             * 地区名称。
             * @example `北京`
             */
            Name: string;
            /**
             * 流量数据。
             * @example `448096774168859`
             */
            Traffic: number;
        }[];
    };
}
