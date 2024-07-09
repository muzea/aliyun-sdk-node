export interface DescribePlayUserAvgResponse {
    /**
     * 请求ID。
     * @example `6C7F90B2-BDA4-4FAC-****-A38A121DFE19`
     */
    RequestId: string;
    UserPlayStatisAvgs: {
        /**
         *  用户每天平均播放均值统计数据。
         */
        UserPlayStatisAvg: {
            /**
             * 播放日期，格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
             * @example `2016-06-30T13:00:00Z`
             */
            Date: string;
            /**
             *  平均播放时长。单位：毫秒。
             * @example `1035902.8`
             */
            AvgPlayDuration: string;
            /**
             * 平均播放次数。
             * @example `2.0`
             */
            AvgPlayCount: string;
        }[];
    };
}
