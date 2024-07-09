export interface ListDoctorHDFSUGIResponse {
    /**
     * 批量HDFS分析数据。
     */
    Data: {
        /**
         * 根据Type类型返回的属主或者属组实际名称。
         * @example `DW`
         */
        Name: string;
        /**
         * 指标信息。
         */
        Metrics: {
            /**
             * 总文件个数。
             */
            TotalFileCount: {
                /**
                 * 指标名称。
                 * @example `totalFileCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `34
                `
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `”“
                `
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Number of total files
                `
                 */
                Description: string;
            };
            /**
             * 总数据量大小。
             */
            TotalDataSize: {
                /**
                 * 指标名称。
                 * @example `totalDataSize`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `40440503`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `MB
                `
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Total data size in megabytes (MB)`
                 */
                Description: string;
            };
            /**
             * 总目录个数。
             */
            TotalDirCount: {
                /**
                 * 指标名称。
                 * @example `totalDirCount`
                 */
                Name: string;
                /**
                 * 指标值。
                 * @example `123`
                 */
                Value: number;
                /**
                 * 指标单位。
                 * @example `”“
                `
                 */
                Unit: string;
                /**
                 * 指标描述。
                 * @example `Number of total dirs
                `
                 */
                Description: string;
            };
        };
    }[];
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    RequestId: string;
    /**
     * 返回读取到的数据位置。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    NextToken: string;
    /**
     * 本次请求所返回的最大记录条数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 本次请求条件下的数据总量。
     * @example `200`
     */
    TotalCount: number;
}
