export interface DescribeDomainRealTimeBpsDataResponse {
    /**
     * 请求ID。
     * @example `B49E6DDA-F413-422B-B58E-2FA23F286726`
     */
    RequestId: string;
    Data: {
        /**
         * 返回数据。
         */
        BpsModel: {
            /**
             * 带宽数据，单位：bit/s。
             * @example `16710625.733333332`
             */
            Bps: number;
            /**
             * 数据时间戳。日期格式按照ISO8601表示法，并使用UTC时间。
             * @example `2019-11-30T05:41:00Z`
             */
            TimeStamp: string;
        }[];
    };
}
