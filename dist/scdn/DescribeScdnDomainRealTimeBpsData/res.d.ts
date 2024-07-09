export interface DescribeScdnDomainRealTimeBpsDataResponse {
    /**
     * 请求ID
     * @example `B49E6DDA-F413-422B-B58E-2FA23F286726`
     */
    RequestId: string;
    Data: {
        /**
         * 数据列表
         */
        BpsModel: {
            /**
             * 带宽数据，单位是bit/second。
             * @example `16710625.733333332`
             */
            Bps: number;
            /**
             * 数据时间戳，日期格式按照ISO8601表示法，并使用UTC时间。例如：2016-10-20T04:00:00Z。
             * @example `2018-01-02T11:05:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
