export interface GetDoctorHBaseClusterResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 指标信息。
         */
        Metrics: {
            /**
             * 表数量。
             */
            TableCount: {
                /**
                 * 指标名称。
                 * @example `tableCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `10`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Number of tables`
                 */
                Description: string;
            };
            /**
             * 集群大小。
             */
            TotalDataSize: {
                /**
                 * 指标名称。
                 * @example `totalDataSize`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `256`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `MB`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Total data size in megabytes (MB)`
                 */
                Description: string;
            };
            /**
             * 总的读取请求次数。
             */
            TotalReadRequest: {
                /**
                 * 指标名称。
                 * @example `totalReadRequest`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `430`
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
                 * @example `520`
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
             * 平均负载。
             */
            AvgLoad: {
                /**
                 * 指标名称。
                 * @example `avgLoad`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `36.0`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `The average load under normal working conditions`
                 */
                Description: string;
            };
            /**
             * 正常的平均负载。
             */
            NormalAvgLoad: {
                /**
                 * 指标名称。
                 * @example `normalAvgLoad`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `526.4`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `The average load under normal working conditions`
                 */
                Description: string;
            };
            /**
             * region均衡度。
             */
            RegionBalance: {
                /**
                 * 指标名称。
                 * @example `regionBalance`
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
                 * @example `The ability to evenly distribute Regions on different RegionServer nodes`
                 */
                Description: string;
            };
            /**
             * 集群请求总数。
             */
            TotalRequest: {
                /**
                 * 指标名称。
                 * @example `totalRequest`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `576`
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
             * Region Server 数量。
             */
            RegionServerCount: {
                /**
                 * 指标名称。
                 * @example `regionServerCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `6`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Number of region servers count`
                 */
                Description: string;
            };
            /**
             * Region 数量。
             */
            RegionCount: {
                /**
                 * 指标名称。
                 * @example `regionCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `161`
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
             * 内存大小。
             */
            MemHeap: {
                /**
                 * 指标名称。
                 * @example `memHeap`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `240`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `MB`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Memory heap usage in megabytes (MB)`
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
                 * @example `298`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `""`
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Number of store files`
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
                 * @example `430`
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
                 * @example `128`
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
        };
        /**
         * 分析结果。
         */
        Analysis: {
            /**
             * HBase 集群整体得分。
             * @example `85`
             */
            HbaseScore: number;
        };
    };
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    RequestId: string;
}
