export interface ListDIProjectConfigRequest {
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * @example `1000`
     */
    "ProjectId": number;
    /**
     * 数据集成同步解决方案任务的目的端数据源。该参数不能为空。
     * 调用ListDIProjectConfig查看同步解决方案的全局配置目前仅支持配置目的端数据源为analyticdb_for_mysql、odps、elasticsearch、holo、mysql及polardb。
     * @example `elasticsearch`
     */
    "DestinationType": string;
    /**
     * 数据集成同步解决方案任务的源端数据源。
     * 调用ListDIProjectConfig查看同步解决方案的全局配置目前仅支持配置源端数据源为oracle、mysql、polardb、datahub、drds及analyticdb_for_mysql。
     * 如果不配置源端数据源，则默认全局配置对所有的源端数据源均生效。
     * @example `mysql`
     */
    "SourceType"?: string;
}
