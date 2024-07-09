export interface GetPropertyScheduleConfigResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `B37C9052-A73E-4707-A024-92477028****`
     */
    RequestId: string;
    /**
     * 资产指纹采集周期配置信息。
     */
    PropertyScheduleConfig: {
        /**
         * 资产指纹的采集频率。取值：
         * - **0**：关闭，即不进行周期性的资产指纹自动采集
         * - **1**：每1小时采集1次
         * - **3**：每3小时采集1次
         * - **12**：每12小时采集1次
         * - **24**：每天采集1次
         * - **168**：每7天采集1次
         * @example `3`
         */
        ScheduleTime: string;
        /**
         * 自动采集频率的资产指纹的类型。取值：
         * - **scheduler\_port_period**：监听端口
         * - **scheduler\_process_period**：运行进程
         * - **scheduler\_account_period**：账号资产
         * - **scheduler\_software_period**：软件资产
         * - **scheduler\_cron_period**：计划任务
         * - **scheduler\_sca_period**：中间件
         * - **scheduler\_autorun_period**：启动项
         * - **scheduler\_lkm_period**：内核模块
         * - **scheduler\_sca\_proxy_period**：Web站点
         * @example `scheduler_account_period`
         */
        Type: string;
        /**
         * 预计下次资产指纹采集开始的时间戳，单位毫秒。
         * @example `1671630647018`
         */
        NextScheduleTime: number;
    };
}
