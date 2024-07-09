export interface ListSparkJobAttemptResponse {
    /**
     * 请求的唯一ID。
     * @example `4A839055-70C7-423D-A6F2-E714EA4502DB`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    DataResult: {
        /**
         * 页数
         * @example `1`
         */
        PageNumber: string;
        /**
         * 页大小
         * @example `10`
         */
        PageSize: string;
        /**
         * JobAttempt总数
         * @example `1`
         */
        TotalCount: string;
        /**
         * JobAttempt列表
         */
        JobAttemptList: {
            /**
             * JobAttempt状态
             * @example `success`
             */
            Status: string;
            /**
             * JobAttempt持续时间
             * @example `00:01:12`
             */
            DurationTime: string;
            /**
             * 终止时间
             * @example `2021-05-27 23:23:20`
             */
            TerminatedTime: string;
            /**
             * 持续时间戳
             * @example `72000`
             */
            DurationTimeValue: string;
            /**
             * JobAttempt创建时间
             * @example `2021-05-27 23:22:08`
             */
            CreateTime: string;
            /**
             * JobAttempt创建时间戳
             * @example `1622128928000`
             */
            CreateTimeValue: string;
            /**
             * SparkUI地址
             * @example `xxx`
             */
            SparkUI: string;
            /**
             * 作业尝试ID
             * @example `j202105272322hangzhou5d64f1560000128-0001`
             */
            JobAttemptId: string;
            /**
             * 作业名称
             * @example `xxx`
             */
            JobName: string;
            /**
             * 作业ID
             * @example `j202105272322hangzhou5d64f1560000128`
             */
            JobId: string;
            /**
             * 终止时间戳
             * @example `1622129000000`
             */
            TerminatedTimeValue: string;
            /**
             * 虚拟集群名称
             * @example `release-test`
             */
            VcName: string;
            /**
             * 作业配置
             * @example `{"xxx":"xxx"}`
             */
            Detail: string;
        }[];
    };
}
