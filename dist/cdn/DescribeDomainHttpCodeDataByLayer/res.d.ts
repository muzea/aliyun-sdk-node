export interface DescribeDomainHttpCodeDataByLayerResponse {
    /**
     * 每条记录的时间间隔，单位：秒。
     * @example `300`
     */
    DataInterval: string;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    HttpCodeDataInterval: {
        /**
         * 每个时间间隔的HTTPCode分布情况列表。
         */
        DataModule: {
            /**
             * 每个HTTPCode对应的响应次数。
             * @example `{ "200": 10, "206": 100}`
             */
            Value: string;
            /**
             * 时间片起始时刻。
             * @example `2015-12-10T20:35:00Z`
             */
            TimeStamp: string;
            /**
             * 总响应次数。
             * @example `110`
             */
            TotalValue: string;
        }[];
    };
}
