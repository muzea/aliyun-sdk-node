export interface DescribeLatestTaskResponse {
    /**
     * 召回表信息
     */
    result: {
        /**
         * 错误码
         * @example `400`
         */
        code: string;
        /**
         * 索引切换完成时间，为UTC时间
         * @example `2020-11-08T02:00:00Z`
         */
        switchedTime: string;
        /**
         * 是否可以回滚
         * @example `true`
         */
        rollbackEnabled: boolean;
        /**
         * 错误信息
         * @example `xxx`
         */
        message: string;
        /**
         * 任务类型，包含 Auto Manual Rollback
         * @example `Manual`
         */
        flowType: string;
        /**
         * 索引构建耗时
         * @example `50`
         */
        costSeconds: number;
        /**
         * 索引开始构建时间，为UTC时间
         * @example `2020-11-08T02:00:00Z`
         */
        builtTime: string;
        /**
         * 索引版本的版本号，后端生成
         * @example `20102010211`
         */
        versionId: string;
        /**
         * 索引构建大小
         * @example `2938475566`
         */
        size: number;
        /**
         * 索引状态，包含索引：
         * - 失败(failed)
         * - 生效中(online)
         * - 已失效（offline）
         * 全量任务：
         * - 全量中（pending  ）
         * - 已完成（success）
         * - 失败(failed)
         * 等
         * @example `pending`
         */
        status: string;
        /**
         * 进度展示百分比，例如80
         * @example `80`
         */
        progress: number;
    }[];
    /**
     * 请求的RequestID
     * @example `829F38F6-E2D6-4109-90A6-888160BD16C2`
     */
    requestId: string;
}
