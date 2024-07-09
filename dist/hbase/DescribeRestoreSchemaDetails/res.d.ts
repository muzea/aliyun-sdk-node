export interface DescribeRestoreSchemaDetailsResponse {
    /**
     * 请求ID。
     * @example `BC682A80-7677-4294-975C-CFEA425381DE`
     */
    RequestId: string;
    /**
     * schema恢复详情。
     */
    RestoreSchema: {
        /**
         * 成功个数。
         * @example `1`
         */
        Succeed: number;
        /**
         * 页面大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 失败个数。
         * @example `0`
         */
        Fail: number;
        /**
         * 总记录数。
         * @example `1`
         */
        Total: number;
        RestoreSchemaDetails: {
            /**
             * 表恢复详情。
             */
            RestoreSchemaDetail: {
                /**
                 * 完成时间。
                 * @example `2020-11-05T06:45:18Z`
                 */
                EndTime: string;
                /**
                 * 报错时错误日志。
                 * @example `null`
                 */
                Message: string;
                /**
                 * 开始时间。
                 * @example `2020-11-05T06:45:14Z`
                 */
                StartTime: string;
                /**
                 * 表名。
                 * @example `default:test1`
                 */
                Table: string;
                /**
                 * 状态。
                 * @example `SUCCEEDED`
                 */
                State: string;
            }[];
        };
    };
}
