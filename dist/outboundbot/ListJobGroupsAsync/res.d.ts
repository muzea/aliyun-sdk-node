export interface ListJobGroupsAsyncResponse {
    /**
     * 是否超时
     * @example `true`
     */
    Timeout: boolean;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 是否有效
     * @example `true`
     */
    Vaild: boolean;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口响应信息
     * @example `Success`
     */
    Message: string;
    /**
     * 每页显示的条数
     * @example `10`
     */
    PageSize: number;
    /**
     * 页号
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总计个数
     * @example `100`
     */
    TotalCount: number;
    /**
     * 作业组列表
     */
    JobGroups: {
        /**
         * 作业分组状态
         * @example `Scheduling`
         */
        Status: string;
        /**
         * 创建时间
         * @example `1640316786259`
         */
        CreationTime: number;
        /**
         * 任务组id
         * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
         */
        JobGroupId: string;
        /**
         * 作业分组的名字
         * @example `xxx`
         */
        JobGroupName: string;
        /**
         * 总呼叫次数
         * @example `100`
         */
        TotalCallNum: number;
        /**
         * 话术流程id
         * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
         */
        ScriptId: string;
        /**
         * 作业分组描述
         * @example `xxx`
         */
        JobGroupDescription: string;
        /**
         * jobFile解析任务的id
         * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
         */
        JobDataParsingTaskId: string;
        /**
         * 作业组使用的场景的名字
         * @example `xxxx`
         */
        ScriptName: string;
        /**
         * 话术版本
         * @example `111`
         */
        ScriptVersion: string;
        /**
         * 修改时间
         * @example `1640316786259`
         */
        ModifyTime: string;
        /**
         * 策略
         * @example `{}`
         */
        Strategy: {
            /**
             * 结束时间
             * @example `1640316786259`
             */
            EndTime: number;
            /**
             * 开始时间
             * @example `1640316786259`
             */
            StartTime: number;
        };
        /**
         * 作业进展状况
         * @example `{}`
         */
        Progress: {
            /**
             * 到当前时间为止未接通作业数量
             * @example `1`
             */
            TotalNotAnswered: number;
            /**
             * 该作业分组的作业整体执行状况
             */
            Status: string;
            /**
             * 开始时间
             * @example `1640316786259`
             */
            StartTime: number;
            /**
             * 失败的job数量
             * @example `10`
             */
            FailedNum: number;
            /**
             * 暂停的job数量
             * @example `10`
             */
            PausedNum: number;
            /**
             * 取消的job数量
             * @example `10`
             */
            CancelledNum: number;
            /**
             * 到当前时间为止作业完成数量
             * @example `10`
             */
            TotalCompleted: number;
            /**
             * 作业总数
             * @example `100`
             */
            TotalJobs: number;
            /**
             * 到目前为止执行总时长
             * @example `1000`
             */
            Duration: number;
            /**
             * 调度中的job数量
             * @example `20`
             */
            Scheduling: number;
            /**
             * 执行中的job数量
             * @example `20`
             */
            ExecutingNum: number;
        };
        /**
         * 导出进度
         * @example `{}`
         */
        ExportProgress: {
            /**
             * 任务状态
             * @example `PENDING`
             */
            Status: string;
            /**
             * 下载地址
             * @example `http://`
             */
            FileHttpUrl: string;
            /**
             * 进度
             * @example `50`
             */
            Progress: string;
        };
        MinConcurrency: number;
    }[];
}
