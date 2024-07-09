export interface ListInstanceTaskResponse {
    /**
     * 返回结果。
     */
    result: {
        /**
         * 子任务具体进度信息列表
         */
        subProgressInfos: {
            /**
             * 子任务类型
             * @example `DATA_PROCESS`
             */
            type: string;
            /**
             * 子任务具体描述
             * @example `data import progress info`
             */
            detail: string;
            /**
             * 子任务一共的任务数量
             * @example `11`
             */
            totalNum: number;
            /**
             * 已完成子任务数
             * @example `2`
             */
            finishedNum: number;
            /**
             * 执行进度
             * 范围为0-100
             * 100为执行结束
             * @example `20`
             */
            progress: number;
        }[];
        /**
         * 当前任务整体进度
         * @example `50`
         */
        totalProgress: number;
        /**
         * 任务名称
         * @example `启动任务`
         */
        name: string;
    }[];
    /**
     * 错误码
     * @example `200`
     */
    code: string;
    /**
     * 请求的RequestID
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
    /**
     * 错误详情
     * @example `successful`
     */
    message: string;
}
