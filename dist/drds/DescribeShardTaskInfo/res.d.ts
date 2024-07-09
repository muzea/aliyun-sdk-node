export interface DescribeShardTaskInfoResponse {
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求唯一ID，如果遇到问题请提供这个请求ID，由工作人员为您排查。
     * @example `5D64DE5944A1E541E0CB908A`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 状态。
         * @example `增量追平`
         */
        Status: string;
        /**
         * 当前阶段。
         * @example `2`
         */
        Stage: string;
        /**
         * 进度。
         * @example `70`
         */
        Progress: string;
        /**
         * 过期时间。
         * @example `0`
         */
        Expired: string;
        /**
         * 目标表名。
         * @example `a2`
         */
        TargetTableName: string;
        /**
         * 源表名。
         * @example `a1`
         */
        SourceTableName: string;
        /**
         * 全量迁移。
         */
        Full: {
            /**
             * 开始时间。
             * @example `2019-09-16 15:11:53`
             */
            StartTime: string;
            /**
             * 当前进度。
             * @example `100`
             */
            Progress: number;
            /**
             * 数据库每秒处理的事务数。
             * @example `0`
             */
            Tps: number;
            /**
             * 任务数量。
             * @example `2`
             */
            Total: number;
            /**
             * 任务过期时间。
             * @example `0`
             */
            Expired: number;
        };
        /**
         * 全量检查。
         */
        FullCheck: {
            /**
             * 开始时间。
             * @example `2019-09-16 15:12:53`
             */
            StartTime: string;
            /**
             * 当前进度。
             * @example `0`
             */
            Progress: number;
            /**
             * 数据库每秒处理的事务数。
             * @example `0`
             */
            Tps: number;
            /**
             * 任务总数量。
             * @example `0`
             */
            Total: number;
            /**
             * 过期时间。
             * @example `0`
             */
            Expired: number;
        };
        /**
         * 全量订正。
         */
        FullRevise: {
            /**
             * 开始时间。
             * @example `2019-09-16 15:12:53`
             */
            StartTime: string;
            /**
             * 当前进度。
             * @example `0`
             */
            Progress: number;
            /**
             * 数据库每秒处理的事务数。
             * @example `0`
             */
            Tps: number;
            /**
             * 任务数量。
             * @example `0`
             */
            Total: number;
            /**
             * 过期时间。
             * @example `0`
             */
            Expired: number;
        };
        /**
         * 检查。
         */
        Review: {
            /**
             * 开始时间。
             * @example `2019-09-16 15:12:53`
             */
            StartTime: string;
            /**
             * 进度。
             * @example `0`
             */
            Progress: number;
            /**
             * 数据库每秒处理的事务数。
             * @example `10`
             */
            Tps: number;
            /**
             * 任务数。
             * @example `5`
             */
            Total: number;
            /**
             * 过期。
             * @example `0`
             */
            Expired: number;
        };
        /**
         * 增量。
         */
        Increment: {
            /**
             * 延迟。
             * @example `1568617906`
             */
            Delay: number;
            /**
             * 开始时间。
             * @example `2019-09-16 15:12:53`
             */
            StartTime: string;
            /**
             * 数据库每秒处理的事务数。
             * @example `10`
             */
            Tps: number;
        };
    };
}
