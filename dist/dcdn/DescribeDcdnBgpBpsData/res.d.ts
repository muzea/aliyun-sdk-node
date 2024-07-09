export interface DescribeDcdnBgpBpsDataResponse {
    /**
     * 结束时间。
     * @example `2018-11-30T00:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2018-11-29T00:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `E9D3257A-1B7C-414C-90C1-8D07AC47BCAC`
     */
    RequestId: string;
    /**
     * 每个时间间隔的BGP带宽情况。
     */
    BgpDataInterval: {
        /**
         * 出向带宽，单位：Bps。
         * @example `183`
         */
        Out: number;
        /**
         * 入向带宽，单位：Bps。
         * @example `318`
         */
        In: number;
        /**
         * 时间片起始时刻。
         * @example `2018-11-29T20:00:00Z`
         */
        TimeStamp: string;
    }[];
}
