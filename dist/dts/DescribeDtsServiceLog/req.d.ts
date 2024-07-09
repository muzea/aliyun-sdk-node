export interface DescribeDtsServiceLogRequest {
    /**
     * 迁移或同步任务ID。
     * @example `c1yr56py103****`
     */
    "DtsJobId"?: string;
    /**
     * 每页记录的日志信息的数量，取值：**20**、**50**、**100**、**500**、**1000**，默认值为**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 指定页码，取值为大于0且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 日志信息的起始时间。
     * > - 如需查询特定时间范围内DTS子任务执行的日志信息，您可以调用[DescribePreCheckStatus](~~209718~~)查询DTS子任务的执行时间。
     * - 起始时间的格式为13位Unix时间戳，单位为毫秒。Unix时间戳转换工具可用搜索引擎获取。
     * @example `1620896327000`
     */
    "StartTime"?: number;
    /**
     * 日志信息的截止时间，您可以调用[DescribePreCheckStatus](~~209718~~)进行查询。
     * > - 如需查询特定时间范围内DTS子任务执行的日志信息，您可以调用[DescribePreCheckStatus](~~209718~~)查询DTS子任务的执行时间。
     * - 起始时间的格式为13位Unix时间戳，单位为毫秒。Unix时间戳转换工具可用搜索引擎获取。
     * @example `1620897227000`
     */
    "EndTime"?: number;
    /**
     * 日志信息的日志级别，多个状态以英文逗号（,）分隔，取值为：
     * - **NORMAL**：正常。
     * - **WARN**：报警。
     * - **ERROR**：报错。
     * @example `NORMAL,WARN,ERROR`
     */
    "Status"?: string;
    /**
     * DTS任务的具体子任务类型，取值为：
     * - **DATA_LOAD**：全量迁移或全量同步。
     * - **ONLINE_WRITER**：增量迁移。
     * - **SYNC_WRITER**：增量同步。
     * @example `SYNC_WRITER`
     */
    "SubJobType"?: string;
    /**
     * 传入关键词，指定查询内容。
     * > 模糊匹配且区分大小写。
     * @example `state = IDLE`
     */
    "Keyword"?: string;
    /**
     * 地域ID，传入本参数来指定实例所在地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    "ZeroEtlJob"?: boolean;
    "ResourceGroupId"?: string;
}
