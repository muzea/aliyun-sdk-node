export interface GetFeeHistoryResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 请求ID。
     * @example `5CED561E-A4E3-4842-8BB6-700BE2AE7784`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    Pager: {
        /**
         * 每页的记录条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总记录的条数。
         * @example `8`
         */
        Total: number;
        /**
         * 当前页码。
         * @example `1`
         */
        Page: number;
    };
    FeeList: {
        /**
         * 返回的计费信息列表。
         */
        Fee: {
            /**
             * 计费周期结束时间。
             * @example `2017-05-05 23:59:59`
             */
            EndDate: string;
            /**
             * 计费周期。
             * @example `2017-05-05 00:00:00 至 2017-05-05 23:59:59`
             */
            TimeSpan: string;
            /**
             * 出账时间。
             * @example `2017-05-05`
             */
            Date: string;
            /**
             * 计费周期开始时间。
             * @example `2017-05-05 00:00:00`
             */
            StartDate: string;
            /**
             * 流量。
             * @example `12345678`
             */
            LevelThreeTraffic: number;
            /**
             * 当前计费方式描述。
             * @example `日峰值带宽`
             */
            Mode: string;
            /**
             * 总流量。
             * @example `12345678`
             */
            TotalTraffic: number;
            /**
             * 业务类型。
             * @example `live`
             */
            BusinessType: string;
            /**
             * 流量。
             * @example `12345678`
             */
            LevelTwoTraffic: number;
            /**
             * 带宽。
             * @example `999000`
             */
            LevelThreeBandwidth: number;
            /**
             * 计费方式。取值：
             * - **0**：日峰值带宽。
             * - **95**：月95峰值带宽。
             * @example `0`
             */
            FlowOut: number;
            /**
             * 带宽。
             * @example `999000`
             */
            LevelTwoBandwidth: number;
            /**
             * 资源ID。
             * @example `6aphce`
             */
            ResourceId: string;
            /**
             * 总带宽。
             * @example `89999000`
             */
            TotalBandwidth: number;
        }[];
    };
}
