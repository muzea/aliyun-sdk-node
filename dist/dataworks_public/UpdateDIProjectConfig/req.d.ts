export interface UpdateDIProjectConfigRequest {
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 数据集成同步解决方案任务的目的端数据源。该参数不能为空。
     * 调用UpdateDIProjectConfig修改同步解决方案的全局配置，目前仅支持配置目的端数据源为analyticdb_for_mysql、odps、elasticsearch、holo、mysql及polardb。
     * @example `odps`
     */
    "DestinationType": string;
    /**
     * 数据集成同步解决方案任务的源端数据源。
     * 调用UpdateDIProjectConfig修改同步解决方案任务的全局配置，目前仅支持配置源端数据源为oracle、mysql、polardb、datahub、drds及analyticdb_for_mysql。
     * 如果不配置源端数据源，则默认全局配置对所有的源端数据源均生效。
     * @example `mysql`
     */
    "SourceType"?: string;
    /**
     * 修改后的数据集成同步解决方案任务默认的全局配置内容（即对不同DDL消息类型配置的默认处理策略）。请使用JSON格式。示例如下：
     * {"RENAMECOLUMN":"WARNING","DROPTABLE":"WARNING","CREATETABLE":"WARNING","MODIFYCOLUMN":"WARNING","TRUNCATETABLE":"WARNING","DROPCOLUMN":"WARNING","ADDCOLUMN":"WARNING","RENAMETABLE":"WARNING"}
     * DDL消息类型如下：
     * - RENAMECOLUMN：重命名列。
     * - DROPTABLE：删除表。
     * - CREATETABLE：新建表。
     * - MODIFYCOLUMN：修改列类型。
     * - TRUNCATETABLE：清空表。
     * - DROPCOLUMN：删除列。
     * - ADDCOLUMN：新增列。
     * - RENAMETABLE：重命名表。
     * DataWorks收到对应类型的DDL消息时，处理策略如下：
     * - WARNING：直接丢弃该消息，同时会在实时同步日志中记录告警信息，指明该消息因执行出错被丢弃。
     * - IGNORE：直接丢弃该消息，不再向目的端数据源发送。
     * - CRITICAL：实时同步任务直接显示出错状态并终止运行。
     * - NORMAL：将相应消息继续下发给目的端数据源，由目的端数据源来处理。因为不同目的端数据源对DDL消息处理策略可能会不同，因此DataWorks只执行转发操作。
     * @example `{"RENAMECOLUMN":"WARNING","DROPTABLE":"WARNING","CREATETABLE":"WARNING","MODIFYCOLUMN":"WARNING","TRUNCATETABLE":"WARNING","DROPCOLUMN":"WARNING","ADDCOLUMN":"WARNING","RENAMETABLE":"WARNING"}`
     */
    "ProjectConfig": string;
}
