export interface DescribeDomainBpsDataResponse {
    /**
     * 结束时间。
     * @example `2015-12-10T20:00Z`
     */
    EndTime: string;
    /**
     * 开始时间。
     * @example `2020-05-14T09:50:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F`
     */
    RequestId: string;
    /**
     * 运营商英文名。
     * @example `unicom`
     */
    IspNameEn: string;
    /**
     * 地域英文名。
     * @example `beijing`
     */
    LocationNameEn: string;
    /**
     * 加速域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔。单位：秒。
     * @example `300`
     */
    DataInterval: string;
    BpsDataPerInterval: {
        /**
         * 每个时间间隔的网络带宽数据列表。
         */
        DataModule: {
            /**
             * 边缘节点HTTPS中国内地带宽。当按区域运营商查询时，此值为空。
             * @example `11286111`
             */
            HttpsDomesticValue: string;
            /**
             * 带宽。单位：bit/s。
             * @example `11288111`
             */
            Value: string;
            /**
             * 全球（不包含中国内地）带宽。当按区域运营商查询时，此值为空。
             * @example `2000`
             */
            OverseasValue: string;
            /**
             * 边缘节点HTTPS的带宽数据值。单位：bit/s。
             * @example `11288111`
             */
            HttpsValue: string;
            /**
             * 边缘节点全球（不包含中国内地）HTTPS带宽。当按区域运营商查询时，此值为空。
             * @example `2000`
             */
            HttpsOverseasValue: string;
            /**
             * 时间片起始时刻。
             * @example `2015-12-10T20:00:00Z`
             */
            TimeStamp: string;
            /**
             * 中国内地带宽。当按区域运营商查询时，此值为空。
             * @example `11286111`
             */
            DomesticValue: string;
        }[];
    };
}
