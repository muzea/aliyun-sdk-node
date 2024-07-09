export interface ListSessionClustersResponse {
    /**
     * SQL Compute列表
     */
    sessionClusters: {
        /**
         * 工作空间id。
         * @example `w-1234abcd`
         */
        workspaceId: string;
        /**
         * SQL Compute id
         * @example `sc-123131`
         */
        sessionClusterId: string;
        /**
         * 用户id
         * @example `123131`
         */
        userId: string;
        /**
         * SQL Compute运行队列名称
         * @example `dev_queue`
         */
        queueName: string;
        /**
         * SQL Compute状态
         * @example `Running`
         */
        state: string;
        /**
         * SQL Compute最近一次状态变化详情
         */
        stateChangeReason: {
            /**
             * 状态变化编码
             * @example `200`
             */
            code: string;
            /**
             * 状态变化消息
             * @example `ok`
             */
            message: string;
        };
        /**
         * 自动启动配置
         */
        autoStartConfiguration: {
            /**
             * 是否开启自动启动
             * @example `true`
             */
            enable: boolean;
        };
        /**
         * 自动终止配置
         */
        autoStopConfiguration: {
            /**
             * 是否允许自动终止
             * @example `false`
             */
            enable: boolean;
            /**
             * SQL Compute空闲指定分钟数后自动终止
             * @example `45`
             */
            idleTimeoutMinutes: number;
        };
        /**
         * SQL Compute配置，等价于背后运行的spark job的配置
         */
        applicationConfigs: {
            /**
             * 配置文件名
             * @example `spark-default.conf`
             */
            configFileName: string;
            /**
             * 配置键
             * @example `spark.app.name`
             */
            configItemKey: string;
            /**
             * 配置值
             * @example `test_application`
             */
            configItemValue: string;
        }[];
        /**
         * SQL Compute名称
         * @example `adhoc_query`
         */
        name: string;
        /**
         * 用户名
         * @example `test_user`
         */
        userName: string;
    }[];
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    requestId: string;
    /**
     * 返回读取到的数据位置。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    nextToken: string;
    /**
     * 本次请求所返回的最大记录条数。
     * @example `20`
     */
    maxResults: number;
    /**
     * 本次请求条件下的数据总量。
     * @example `200`
     */
    totalCount: number;
}
