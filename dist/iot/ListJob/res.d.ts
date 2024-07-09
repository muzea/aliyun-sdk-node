export interface ListJobResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `BF449394-1C7D-4144-B7C4-9C3FA29F8B64`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 当前页码任务个数。
     * @example `5`
     */
    PageSize: number;
    /**
     * 返回的任务总个数。
     * @example `20`
     */
    Total: number;
    /**
     * 当前页码。
     * @example `1`
     */
    Page: number;
    Data: {
        /**
         * 调用成功时，返回的任务详情信息，请参见以下参数说明。
         */
        data: {
            /**
             * 任务类型。
             * @example `CUSTOM_JOB`
             */
            Type: string;
            /**
             * 任务状态。
             * @example `COMPLETED`
             */
            Status: string;
            /**
             * 任务名称。
             * @example `MyTestJobOEfwJN`
             */
            JobName: string;
            /**
             * 任务的描述信息。
             * @example `TestDescription`
             */
            Description: string;
            /**
             * 任务信息修改时间。
             * @example `2019-05-21T17:15:46.000Z`
             */
            UtcModified: string;
            /**
             * 任务ID。任务的全局唯一标识符。
             * @example `Z20nyanW5****010001`
             */
            JobId: string;
            /**
             * 任务创建时间。
             * @example `2019-05-21T11:45:37.000Z`
             */
            UtcCreate: string;
            /**
             * 任务调度时间的毫秒数。
             * @example `1557062301656`
             */
            ScheduledTime: number;
        }[];
    };
}
