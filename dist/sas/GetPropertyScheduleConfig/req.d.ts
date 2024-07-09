export interface GetPropertyScheduleConfigRequest {
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
     * @example `scheduler_sca_period`
     */
    "Type"?: string;
    /**
     * 要查询的服务器的UUID。
     * >调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口可以获取该参数。
     * @example `50d213b4-3a35-427a-b8a5-04b0c7e1****`
     */
    "Uuid"?: string;
}
