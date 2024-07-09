export interface DescribeDrdsInstanceLevelTasksResponse {
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `2F7F8080-9132-4279-85D0-B7E5C4305162`
     */
    RequestId: string;
    Tasks: {
        /**
         * 未完成任务列表。
         */
        Task: {
            /**
             * 任务类型。
             * @example `11`
             */
            TaskType: number;
            /**
             * 任务阶段。
             * @example `1`
             */
            TaskPhase: string;
            /**
             * 任务进度，取值0-100。
             * @example `99`
             */
            Progress: number;
            /**
             * 是否允许取消。
             * @example `false`
             */
            AllowCancel: boolean;
            /**
             * 任务状态，正在执行0，成功1，失败2，取消3。
             * @example `0`
             */
            TaskStatus: number;
            /**
             * 是否显示进度。
             * @example `true`
             */
            ShowProgress: boolean;
            /**
             * 任务名称。
             * @example `upgrade_instance`
             */
            TaskName: string;
            /**
             * 进度描述。
             * @example `正在执行`
             */
            ProgressDescription: string;
            /**
             * 任务创建时间戳。
             * @example `1568705520000`
             */
            GmtCreate: number;
            /**
             * 任务ID。
             * @example `12312`
             */
            TargetId: number;
            /**
             * 任务错误信息。
             * @example `实例状态异常`
             */
            ErrMsg: string;
        }[];
    };
}
