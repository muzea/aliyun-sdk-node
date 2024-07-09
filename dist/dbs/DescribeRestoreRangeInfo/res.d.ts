export interface DescribeRestoreRangeInfoResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `E2BD9DFC-6760-5F49-97C5-DA739E29****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `Param.NotFound`
     */
    ErrCode: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `The specified parameter %s value is not valid. `
     */
    ErrMessage: string;
    Items: {
        /**
         * 可恢复时间段信息。
         */
        DBSRecoverRange: {
            /**
             * 可恢复结束时间戳。
             * @example `1646760308000`
             */
            EndTimestampForRestore: number;
            /**
             * 数据库所在位置。
             * @example `rds`
             */
            SourceEndpointInstanceType: string;
            /**
             * 可恢复时间段类型，返回值如下：
             * - **point**：该时间段为全量备份离散时间点。
             * - **range**：该时间段为连续备份时间段，可指定任意时间。
             * @example `point`
             */
            RangeType: string;
            /**
             * 可恢复开始时间戳。
             * @example `1646760282000`
             */
            BeginTimestampForRestore: number;
            /**
             * 数据库实例ID。
             * @example `rm-bp106x9tk2c91****`
             */
            SourceEndpointInstanceID: string;
            FullBackupList: {
                /**
                 * 当RangeType为point时，该字段展示这个时间段范围内所有的权利。备份点信息。
                 */
                FullBackupDetail: {
                    /**
                     * 全量备份结束时间，返回值：1646760308000。
                     * @example `1646760308000`
                     */
                    EndTime: number;
                    /**
                     * 全量备份开始时间，返回值：1646760282000。
                     * @example `1646760282000`
                     */
                    StartTime: number;
                    /**
                     * 备份集ID。
                     * @example `qecnsxkd****`
                     */
                    BackupSetId: string;
                }[];
            };
        }[];
    };
}
