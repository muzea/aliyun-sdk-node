export interface GetRunningJobsResponse {
    /**
     * 请求id。
     * @example `0bc3b4ab16684833172127321e2c25`
     */
    requestId: string;
    /**
     * 业务成功与否。如果非空且不是200，那么表示业务处理失败。
     * @example `200`
     */
    httpCode: number;
    /**
     * - 当success为false，返回业务错误码；
     *
     * - 当success为true，返回空值。
     * @example `success`
     */
    errorCode: string;
    /**
     * 错误描述信息。
     * @example `0A3B1FD2006A24C8D8BE65CDAC028298`
     */
    errorMsg: string;
    /**
     * 返回结果。
     */
    data: {
        /**
         * 执行状态的作业列表
         */
        runningJobInfoList: {
            /**
             * 实例ID。
             * @example `2023050206371544gomgtp3ljcr4`
             */
            instanceId: string;
            /**
             * 提交作业的账号
             * @example `ALIYUN$xxx@test.aliyunid.com`
             */
            jobOwner: string;
            /**
             * maxcompute项目名称
             * @example `project_20221021123044_981b`
             */
            project: string;
            /**
             * 作业使用的配额昵称
             * @example `my_quota`
             */
            quotaNickname: string;
            /**
             * 作业的cu快照占比
             * @example `0.45`
             */
            cuSnapshot: number;
            /**
             * 作业的内存快照占比
             * @example `0.45`
             */
            memorySnapshot: number;
            /**
             * 作业的提交时间
             * @example `1689746864`
             */
            submittedAtTime: number;
            /**
             * 作业的开始运行时间
             * @example `1689746864`
             */
            runningAtTime: number;
            /**
             * 任务进度。
             * @example `0`
             */
            progress: number;
        }[];
        /**
         * 返回结果的总数量。
         * @example `64`
         */
        totalCount: number;
        /**
         * 当前页码。
         * @example `2`
         */
        pageNumber: number;
        /**
         * 每页显示条数。
         * @example `10`
         */
        pageSize: number;
    };
}
