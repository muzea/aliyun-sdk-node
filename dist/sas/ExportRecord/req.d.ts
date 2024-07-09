export interface ExportRecordRequest {
    /**
     * 设置请求和接收消息的语言类型。默认值**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 设置导出内容的筛选条件。
     * > 本接口为云安全中心多个功能导出检测列表的通用导出接口，此参数因功能不同，配置字段也不同。不推荐您在调用接口时设置此参数。您可以不设置此参数导出信息列表，然后在导出的Excel中筛选目标数据。
     * @example `{"extend":"1","currentPage":1,"pageSize":10}`
     */
    "Params"?: string;
    /**
     * 要导出检测结果列表的类型。取值：
     * - **assetInstance**：资产中心的服务器列表
     * - **user**：账户的资产指纹列表
     * - **port**：端口的资产指纹列表
     * - **process**：进程的资产指纹列表
     * - **sca**：中间件的资产指纹列表
     * - **database**：数据库的资产指纹列表
     * - **web**：Web服务的资产指纹列表
     * - **software**：软件的资产指纹列表
     * - **cron**：计划任务的资产指纹列表
     * - **autorun**：启动项的资产指纹列表
     * - **lkm**：内核模块的资产指纹列表
     * - **webserver**：Web站点的资产指纹列表
     * - **virusScanExport**：病毒查杀扫描任务详情列表
     * - **imageVulExport**：镜像系统漏洞列表
     * - **imageBaseLineExport**：镜像基线检查结果列表
     * - **imageAffectedMaliciousExport**：镜像恶意样本检查结果列表
     * - **baselineCspm**：云平台配置检查的检测结果列表
     * - **attack**：攻击分析告警事件的列表
     * - **accessKey**：AK泄露检测的告警事件列表
     * - **exportObjectScanEvents**：恶意文件检测的告警事件列表
     * @example `database`
     */
    "ExportType": string;
    /**
     * 要导出文件的类型。取值：
     * - **virusScanExport**：病毒查杀扫描任务详情导出；当ExportType为virusScanExport时使用且必填
     * @example `virusScanExport`
     */
    "ExportFileType"?: string;
}
