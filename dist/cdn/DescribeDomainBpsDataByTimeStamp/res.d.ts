export interface DescribeDomainBpsDataByTimeStampResponse {
    /**
     * 时刻。
     * @example `2019-11-30T05:40:00Z`
     */
    TimeStamp: string;
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 加速域名信息。
     * @example `example.com`
     */
    DomainName: string;
    BpsDataList: {
        /**
         * 每个地域、运营商对应的带宽数据列表。
         */
        BpsDataModel: {
            /**
             * 地域英文名。
             * @example `Liaoning`
             */
            LocationName: string;
            /**
             * 时间片起始片刻。
             * @example `2019-11-30T05:40:00Z`
             */
            TimeStamp: string;
            /**
             * 运营商英文名。
             * @example `unicom`
             */
            IspName: string;
            /**
             * 对应的带宽值。
             * @example `52119553`
             */
            Bps: number;
        }[];
    };
}
