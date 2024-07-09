export interface ModifyPropertyScheduleConfigRequest {
    /**
     * 待修改自动采集频率的资产指纹的类型。取值：
     * - **scheduler\_port_period**：监听端口
     * - **scheduler\_process_period**：运行进程
     * - **scheduler\_account_period**：账号资产
     * - **scheduler\_software_period**：软件资产
     * - **scheduler\_cron_period**：计划任务
     * - **scheduler\_sca_period**：中间件以及数据库、Web服务
     * - **scheduler\_autorun_period**：启动项
     * - **scheduler\_lkm_period**：内核模块
     * - **scheduler\_sca\_proxy_period**：Web站点
     * @example `scheduler_port_period`
     */
    "Type": string;
    /**
     * 设置资产指纹的采集频率。取值：
     * - **0**：关闭，即不进行周期性的资产指纹自动采集
     * - **1**：每1小时采集1次
     * - **3**：每3小时采集1次
     * - **12**：每12小时采集1次
     * - **24**：每天采集1次
     * - **168**：每7天采集1次
     * @example `3`
     */
    "ScheduleTime": string;
}
