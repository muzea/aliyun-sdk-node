export interface DescribeVodDomainBpsDataResponse {
    /**
     * 数据的结束时间点。
     * @example `2015-12-10T14:00:00Z`
     */
    EndTime: string;
    /**
     * 数据的起始时间点。
     * @example `2015-12-10T13:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `3C6CCEC4-6B88-4D4A-****-D47B3D92CF8F`
     */
    RequestId: string;
    /**
     * 运营商英文名。
     * @example `unicom`
     */
    IspNameEn: string;
    /**
     * 地域英文名。
     * @example `shanghai`
     */
    LocationNameEn: string;
    /**
     * 加速域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，即数据的时间粒度。单位：秒。
     * @example `300`
     */
    DataInterval: string;
    BpsDataPerInterval: {
        /**
         * 每个时间间隔的网络带宽数据列表。
         */
        DataModule: {
            /**
             * L1节点HTTPS中国内地带宽。单位：bit/s。当按区域运营商查询时，此值为空。
             * @example `11286111`
             */
            HttpsDomesticValue: string;
            /**
             * 总带宽数据。单位：bit/s。
             * @example `11288111`
             */
            Value: string;
            /**
             * 全球（不包含中国内地）带宽数据。当按区域运营商查询时，此值为空。单位：bit/s。
             * @example `2000`
             */
            OverseasValue: string;
            /**
             * L1节点HTTPS的带宽数据。单位：bit/s。
             * @example `11288111`
             */
            HttpsValue: string;
            /**
             * L1节点全球（不包含中国内地）HTTPS 带宽。当按区域运营商查询时，此值为空。。单位：bit/s。
             * @example `2000`
             */
            HttpsOverseasValue: string;
            /**
             * 数据时间戳。日期格式按照ISO8601表示法，并使用UTC时间。
             * @example `2015-12-10T13:00:00Z`
             */
            TimeStamp: string;
            /**
             * 中国内地带宽。当按区域运营商查询时，此值为空。单位：bit/s。
             * @example `11286111`
             */
            DomesticValue: string;
        }[];
    };
}
