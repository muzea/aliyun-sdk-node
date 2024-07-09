export interface CreateFilteringAlgorithmResponse {
    /**
     * 召回表信息。
     */
    result: {
        /**
         * 最后更新时间，单位为UTC时间。
         * @example `2018-12-07T02:24:26.000Z`
         */
        gmtModified: string;
        /**
         * 表示单签召回表的状态。
         * 取值：
         * - **Draft**：草稿。
         * - **Running**：运行中。
         * - **Offline**：已下线。
         * - **Deleted**：已删除。
         * @example `Running`
         */
        status: string;
        /**
         * 创建时间的UTC时间。
         * @example `2018-12-07T02:24:26.000Z`
         */
        gmtCreate: string;
        /**
         * 召回表ID。
         * @example `abc`
         */
        algorithmId: string;
        /**
         * Meta源数据。
         */
        meta: {
            /**
             * 数据源类型，当前只支持ODPS。
             * @example `ODPS`
             */
            type: string;
            /**
             * 召回表类型包含内容。
             * @example `{}`
             */
            extInfo: any;
            /**
             * 数据源召回类目。
             * @example `1_2`
             */
            category: string;
            /**
             * Table的阈值信息。
             */
            threshold: {
                /**
                 * 源数据大小波动阈值(0-100)。
                 * @example `1`
                 */
                sourceDataSizeThreshold: number;
                /**
                 * 源数据条目数波动阈值(0-100)。
                 * @example `1`
                 */
                sourceDataRecordThreshold: number;
                /**
                 * 索引大小波动阈值(0-100)。
                 * @example `1`
                 */
                indexSizeThreshold: number;
                /**
                 * 索引丢失阈值(0-100)。
                 * @example `1`
                 */
                indexLossThreshold: number;
            };
            /**
             * 表示单签召回表的状态。
             * 取值：
             * - **Draft**：草稿。
             * - **Running**：运行中。
             * - **Offline**：已下线。
             * - **Deleted**：已删除。
             * @example `Running`
             */
            status: string;
            /**
             * 创建时间的UTC时间。
             * @example `2018-12-07T02:24:26.000Z`
             */
            gmtCreate: string;
            /**
             * ODPS召回表名称。
             * @example `table_test`
             */
            tableName: string;
            /**
             * 定时调度任务Cron。
             * @example `0 0/12 0 * *`
             */
            cron: string;
            /**
             * 描述。
             * @example `xx`
             */
            description: string;
            /**
             * 最后修改时间的UTC时间。
             * @example `2018-12-07T02:24:26.000Z`
             */
            gmtModified: string;
            /**
             * ODPS中的ProjectName。
             * @example `testname`
             */
            projectName: string;
            /**
             * 召回名称。
             * @example `algorithmTest`
             */
            algorithmName: string;
            /**
             * 是否开启定时任务。
             * @example `true`
             */
            cronEnabled: boolean;
        };
    };
    /**
     * 请求的ID。
     * @example `829F38F6-E2D6-4109-90A6-888160BD16C2`
     */
    requestId: string;
}
