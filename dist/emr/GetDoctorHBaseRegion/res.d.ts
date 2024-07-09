export interface GetDoctorHBaseRegionResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 表名称。
         * @example `tb_item`
         */
        TableName: string;
        /**
         * RegionServer的Host。
         * @example `emr-worker-2.cluster-20****`
         */
        RegionServerHost: string;
        /**
         * 指标信息。
         */
        Metrics: {
            /**
             * 总的读取请求次数
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
                 * @example `Total read request`
                 */
                Description: string;
            };
            /**
             * 总的写入请求次数
             */
            TotalWriteRequest: {
                /**
                 * 指标名称。
                 * @example `totalWriteRequest`
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
                 * @example `Total Write Request`
                 */
                Description: string;
            };
            /**
             * store file个数。
             */
            StoreFileCount: {
                /**
                 * 指标名称。
                 * @example `storeFileCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `100`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Number of store file`
                 */
                Description: string;
            };
            /**
             * 单日的读请求数量。
             */
            DailyReadRequest: {
                /**
                 * 指标名称。
                 * @example `dailyReadRequest	`
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
                 * @example `Number of read requests per day
                `
                 */
                Description: string;
            };
            /**
             * 单日的写请求数量。
             */
            DailyWriteRequest: {
                /**
                 * 指标名称。
                 * @example `dailyWriteRequest	`
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
                 * @example `Number of write requests per day
                `
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
