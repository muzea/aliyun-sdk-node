export interface ListDIProjectConfigResponse {
    /**
     * 请求是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次调用的唯一ID。用于出现错误后定位日志，排查问题。
     * @example `0000-ABCD-EFG	`
     */
    RequestId: string;
    /**
     * 查看目标工作空间中数据集成同步解决方案任务默认全局配置的返回结果。
     */
    Data: {
        /**
         * 数据集成同步解决方案任务默认的全局配置内容（即对不同DDL消息类型配置的默认处理策略）。示例如下：
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
        Config: string;
    };
}
