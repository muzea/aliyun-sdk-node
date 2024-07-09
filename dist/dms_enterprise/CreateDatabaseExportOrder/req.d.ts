export interface CreateDatabaseExportOrderRequest {
    /**
     * 父工单ID。
     * @example ` 877****`
     */
    "ParentId"?: number;
    /**
     * 业务背景，描述提工单的原因，以减少沟通成本。
     * @example `文档测试`
     */
    "Comment": string;
    /**
     * 工单附件Key，补充当前工单信息。可通过调用接口[GetUserUploadFileJob](~~206069~~)获取该参数的值。
     * @example `order_attachment.txt`
     */
    "AttachmentKey"?: string;
    /**
     * 工单参数。
     */
    "PluginParam": {
        /**
         * 导出原因。
         * @example `文档测试`
         */
        Classify: string;
        /**
         * 数据库ID。您可通过调用[GetDatabase](~~465856~~)获取该参数的值。
         * @example `17****`
         */
        DbId: number;
        /**
         * 实例ID。您可通过调用[GetInstance](~~465826~~)接口获取该参数的值。
         * @example `137****`
         */
        InstanceId: number;
        /**
         * 是否为逻辑库，取值如下：
         * - **true**：是
         * - **false**：否
         * @example `false`
         */
        Logic: boolean;
        /**
         * 导出配置。
         */
        Config: {
            /**
             * SQL脚本拓展选项。列表长度可为0。
             */
            SQLExtOption: string[];
            /**
             * 大数据导出选项，用于筛选需要导出哪些大数据类型。列表长度可为0。
             */
            DataOption: string[];
            /**
             * 导出内容。取值如下：
             * - **DATA**：数据。
             * - **STRUCT**：结构。
             * - **DATA_STRUCT**：数据和结构。
             * @example `DATA`
             */
            ExportContent: string;
            /**
             * 导出结构类型。
             */
            ExportTypes: string[];
            /**
             * 导出的表列表。
             */
            SelectedTables: string[];
            /**
             * 导出表过滤条件。
             */
            Tables: any;
            /**
             * 导出格式。取值如下：
             * - **SQL**
             * - **CSV**
             * - **XLSX**
             * @example `SQL`
             */
            TargetOption: string;
        };
        /**
         * 数据库搜索名称。
         * @example `test@xxx.xxx.xxx.xxx:3306`
         */
        SearchName: string;
    };
    /**
     * 相关人列表。
     */
    "RelatedUserList"?: number[];
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
}
