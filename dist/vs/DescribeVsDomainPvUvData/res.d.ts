export interface DescribeVsDomainPvUvDataResponse {
    /**
     * 结束时间
     * @example `2021-11-24T00:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2021-12-12T10:00:00Z`
     */
    StartTime: string;
    /**
     * 本次操作请求ID
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 视图计算域名名称
     * @example `example.aliyundoc.com`
     */
    DomainName: string;
    /**
     * 时间间隔，单位：秒。
     * @example `3600`
     */
    DataInterval: string;
    PvUvDataInfos: {
        /**
         * 数据信息。
         */
        PvUvDataInfo: {
            /**
             * PV数据。
             * @example `100`
             */
            PV: string;
            /**
             * 时间片起始时刻。
             * @example `2021-10-14T23:00:00Z`
             */
            TimeStamp: string;
            /**
             * UV数据。
             * @example `100`
             */
            UV: string;
        }[];
    };
}
