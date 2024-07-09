export interface DescribeLiveDomainPvUvDataResponse {
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ssZ</i>（UTC时间）。
     * @example `2018-03-20T16:00:00Z`
     */
    EndTime: string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ssZ</i>（UTC时间）。
     * @example `2018-03-17T16:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `E9D3257A-1B7C-414C-90C1-8D07AC47BCAC`
     */
    RequestId: string;
    /**
     * 播流域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔。单位：秒。固定值为3600。
     * @example `3600`
     */
    DataInterval: string;
    PvUvDataInfos: {
        /**
         * PV、UV数据列表。
         */
        PvUvDataInfo: {
            /**
             * PV数据。
             * @example `3036`
             */
            PV: string;
            /**
             * 时间片起始时刻。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ssZ</i>（UTC时间）。
             * @example `2018-03-19T16:00:00Z`
             */
            TimeStamp: string;
            /**
             * UV数据。
             * @example `2`
             */
            UV: string;
        }[];
    };
}
