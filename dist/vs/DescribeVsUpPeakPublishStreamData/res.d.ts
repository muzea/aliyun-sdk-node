export interface DescribeVsUpPeakPublishStreamDataResponse {
    /**
     * 该条任务请求ID
     * @example `27A3C548-A699-48F9-97CD-F35D81075AF3`
     */
    RequestId: string;
    DescribeVsUpPeakPublishStreamDatas: {
        /**
         * 每日峰值并发推流数据
         */
        DescribeVsUpPeakPublishStreamData: {
            /**
             * 查询的每日时间
             * @example `1522166400000`
             */
            QueryTime: string;
            BandWidth: string;
            /**
             * 统计数据属性名称。当DomainSwitch取值为on时，显示用户直播域名；为off或者不传值是显示用户Id。
             * @example `example.com`
             */
            StatName: string;
            /**
             * 每日峰值并发推流数的峰值时刻
             * @example `1522252320000`
             */
            PeakTime: string;
            /**
             * 每日峰值并发推流数
             * @example `31`
             */
            PublishStreamNum: number;
        }[];
    };
}
