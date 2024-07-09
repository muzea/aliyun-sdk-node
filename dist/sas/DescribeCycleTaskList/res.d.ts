export interface DescribeCycleTaskListResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A4EB8B1C-1DEC-5E18-BCD0-D1BBB393****`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 总条数。
         * @example `149`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示数据条数。
         * @example `9`
         */
        Count: number;
    };
    /**
     * 周期性扫描任务列表。
     */
    CycleScheduleResponseList: {
        /**
         * 最后一次任务id。
         * @example `38730bb078f4a1461d4ed283994c****`
         */
        LastTaskId: string;
        /**
         * 配置对应的ID。
         * @example `2cdbdeba8dd70586d5814d4cbf21****`
         */
        ConfigId: string;
        /**
         * 任务结束时间（小时）。
         * @example `7`
         */
        TargetEndTime: number;
        /**
         * 下一次执行的时间。格式为毫秒级时间戳。
         * @example `1671184531000`
         */
        NextStartTimeStr: number;
        /**
         * 任务名称。
         * @example `IMAGE_SCAN`
         */
        TaskName: string;
        /**
         * 任务类型。
         * @example `IMAGE_SCAN`
         */
        TaskType: string;
        /**
         * 间隔周期。
         * @example `3`
         */
        IntervalPeriod: number;
        /**
         * 首次执行时间。
         * @example `1667491200000`
         */
        FirstDateStr: number;
        /**
         * 扩展信息字段。
         * @example `{"userAgreement":"yes","lang":"zh"}`
         */
        Param: string;
        /**
         * 扫描周期的单位，取值：
         * - **day**：天。
         * - **hour**：小时。
         * @example `day`
         */
        PeriodUnit: string;
        /**
         * 任务开始时间（小时）。
         * @example `0`
         */
        TargetStartTime: number;
        /**
         * 是否启用。取值：
         * - **1**：开启
         * - **0**：关闭
         * @example `1`
         */
        Enable: number;
    }[];
}
