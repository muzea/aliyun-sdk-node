export interface GetMetaTableOutputResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `The specified parameters are invalid.`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `0bc1ec92159376****`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `1031203110005`
     */
    ErrorCode: string;
    /**
     * 业务数据。
     */
    Data: {
        /**
         * 分页的页数。默认值为1，最小值为1，最大值为30。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页显示的条数，默认为10条，最大100条。
         * @example `10`
         */
        PageSize: number;
        /**
         * 表的总数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 实例列表。
         */
        DataEntityList: {
            /**
             * 结束时间。
             * @example `1511107200000`
             */
            EndTime: string;
            /**
             * 实例ID。
             * @example `3521`
             */
            TaskInstanceId: number;
            /**
             * 开始时间。
             * @example `1511107200000`
             */
            StartTime: string;
            /**
             * 工作空间的ID。
             * @example `333`
             */
            ProjectId: number;
            /**
             * 等待时间。
             * @example `323`
             */
            WaitTime: string;
            /**
             * ODPS表的唯一标识。
             * @example `odps.engine_name.table_name`
             */
            TableGuid: string;
            /**
             * 任务标识。
             * @example `1048576`
             */
            TaskId: string;
        }[];
    };
}
