export interface DescribePropertyCountRequest {
    /**
     * 指纹类型。多个用半角英文逗号分割。取值：
     * - **port**：端口
     * - **process**：进程
     * - **software**：软件
     * - **user**：账户
     * - **cron**：计划任务
     * - **sca**：中间件
     * - **web**：Web站点
     * - **database**：数据库
     * - **lkm**：内核模块
     * - **autorun**：启动项
     * - **web_server**：web服务
     * @example `port,process`
     */
    "Type"?: string;
    /**
     * 指定待查询的资产UUID。多个用半角英文逗号分割。
     * @example `9658314a-7609-4426-afc4-2c924072****,
    9658314a-7609-4426-afc4-2c924072****`
     */
    "UuidList"?: string;
}
