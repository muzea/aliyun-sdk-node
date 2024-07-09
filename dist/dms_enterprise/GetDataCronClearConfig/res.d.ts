export interface GetDataCronClearConfigResponse {
    /**
     * 请求ID。
     * @example `283C461F-11D8-48AA-B695-DF092DA32AF3`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 数据配置。
     */
    DataCronClearConfig: {
        /**
         * Crontab表达式，以便定期执行任务。更多信息，请参见[Crontab表达式](~~206581~~)。
         * @example `0 0 23 ? * 7,1`
         */
        CronFormat: string;
        /**
         * 执行时长（单位：小时）。取值为**0**时，说明不指定执行时长。
         * @example `1`
         */
        Duration: string;
        /**
         * 定时任务状态，为**空**表示未调度，其他取值及说明如下：
         * - **PAUSE**：调度暂停。
         * - **WAITING**：待调度。
         * - **SUCCESS**：调度完成。
         * @example `SUCCESS`
         */
        CronStatus: string;
        /**
         * 调度次数。
         * @example `2`
         */
        CronCallTimes: string;
        /**
         * 最近一次调度时间。
         * @example `2022-11-18 00:00:00`
         */
        CronLastCallStartTime: string;
        /**
         * 下一次调度时间。
         * > 仅当调度状态为**SUCCESS**时才会显示。
         * @example `2022-11-19 00:00:00`
         */
        CronNextCallTime: string;
        /**
         * 是否启用自动Optimize table，取值：
         * - **0**：不启用。
         * - **大于0**：启用，表示每隔多少次清理以后下次调用进行Optimize table。
         * @example `0`
         */
        OptimizeTableAfterEveryClearTimes: number;
        /**
         * 已进行自动Optimize table的次数，仅当OptimizeTableAfterEveryClearTimes大于0时有效。
         * @example `0`
         */
        CurrentClearTaskCount: number;
    };
}
