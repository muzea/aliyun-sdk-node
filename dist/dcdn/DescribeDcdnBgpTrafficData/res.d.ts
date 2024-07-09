export interface DescribeDcdnBgpTrafficDataResponse {
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
     * 每个时间间隔的BGP流量情况。
     */
    BgpDataInterval: {
        /**
         * 出向流量，单位：Byte。
         * @example `183`
         */
        Out: number;
        /**
         * 入向流量，单位：Byte。
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
