export interface GetDoctorHBaseRegionServerResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 指标信息。
         */
        Metrics: {
            /**
             * Region的数量。
             */
            RegionCount: {
                /**
                 * 指标名称。
                 * @example `regionCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `15`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Number of regions count`
                 */
                Description: string;
            };
            /**
             * 累积的读请求数量
             */
            TotalReadRequest: {
                /**
                 * 指标名称。
                 * @example `totalReadRequest`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `1000`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Total number of read requests`
                 */
                Description: string;
            };
            /**
             * 累积的写请求数量。
             */
            TotalWriteRequest: {
                /**
                 * 指标名称。
                 * @example `totalWriteRequest	`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `1000`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Total number of write requests`
                 */
                Description: string;
            };
            /**
             * 累积的总请求数量。
             */
            TotalRequest: {
                /**
                 * 指标名称。
                 * @example `totalRequest`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `1000`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Total number of requests`
                 */
                Description: string;
            };
            /**
             * 单日的读请求数量。
             */
            DailyReadRequest: {
                /**
                 * 指标名称。
                 * @example `dailyReadRequest`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `1000`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Number of read requests per day`
                 */
                Description: string;
            };
            /**
             * 单日的写请求数量。
             */
            DailyWriteRequest: {
                /**
                 * 指标名称。
                 * @example `dailyWriteRequest`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `1000`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Number of write requests per day`
                 */
                Description: string;
            };
            /**
             * 平均GC时间。
             */
            AvgGc: {
                /**
                 * 指标名称。
                 * @example `avgGc`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `42.3`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `The efficiency of garbage collection in the system`
                 */
                Description: string;
            };
            /**
             * 缓存比例。
             */
            CacheRatio: {
                /**
                 * 指标名称。
                 * @example `cacheRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `95.3`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Ratio of the BlockCache memory size`
                 */
                Description: string;
            };
            /**
             * 单日读请求数量的增长率。
             */
            DailyReadRequestDayGrowthRatio: {
                /**
                 * 指标名称。
                 * @example `dailyReadRequestDayGrowthRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `1.0`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `The growth rate of daily read request quantity.
                `
                 */
                Description: string;
            };
            /**
             * 单日写请求数量的增长率。
             */
            DailyWriteRequestDayGrowthRatio: {
                /**
                 * 指标名称。
                 * @example `dailyWriteRequestDayGrowthRatio`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `1.0`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `The growth rate of daily write request quantity.`
                 */
                Description: string;
            };
        };
    };
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    RequestId: string;
}
