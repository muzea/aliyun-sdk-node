export interface DescribeDomainMax95BpsDataResponse {
    /**
     * 请求ID。
     * @example `3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F`
     */
    RequestId: string;
    /**
     * 加速域名信息。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 获取数据的结束时间。
     * @example `2015-12-11T21:00:00Z`
     */
    EndTime: string;
    /**
     * 获取数据的开始时间。
     * @example `2015-12-10T20:00:00Z`
     */
    StartTime: string;
    /**
     * 中国内地95带宽峰值。
     * @example `16777590.28`
     */
    DomesticMax95Bps: string;
    /**
     * 全球（不含中国内地）95带宽峰值。
     * @example `0`
     */
    OverseasMax95Bps: string;
    /**
     * 95带宽峰值。
     * @example `16777590.28`
     */
    Max95Bps: string;
    DetailData: {
        /**
         * 95带宽明细数据。
         */
        Max95Detail: {
            /**
             * 时间片起始时刻。
             * @example `2015-12-11T21:00:00Z`
             */
            TimeStamp: string;
            /**
             * 95带宽对应的区域。
             * @example `CN`
             */
            Area: string;
            /**
             * 95带宽峰值时间。
             * @example `2015-12-11T21:05:00Z`
             */
            Max95BpsPeakTime: string;
            /**
             * 95带宽峰值。
             * @example `16777590.28`
             */
            Max95Bps: number;
        }[];
    };
}
