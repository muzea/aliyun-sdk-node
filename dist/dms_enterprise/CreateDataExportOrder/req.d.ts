export interface CreateDataExportOrderRequest {
    /**
     * 父工单ID。
     * @example `877****`
     */
    "ParentId"?: number;
    /**
     * 业务背景，描述提工单的原因，以减少沟通成本。
     * @example `业务测试。`
     */
    "Comment": string;
    /**
     * 工单附件Key，补充当前工单信息。可通过调用接口[GetUserUploadFileJob](~~206069~~)获取该参数的值。
     * @example `order_attachment.txt`
     */
    "AttachmentKey"?: string;
    /**
     * 相关人列表。
     */
    "RelatedUserList"?: number[];
    /**
     * 工单参数。
     */
    "PluginParam": {
        /**
         * 预估影响SQL行数。
         * @example `1`
         */
        AffectRows: number;
        /**
         * 导出工单的原因类别。
         * @example `测试`
         */
        Classify: string;
        /**
         * 实例ID。
         * @example `132****`
         */
        InstanceId: number;
        /**
         * 数据库ID。
         * @example `18****`
         */
        DbId: number;
        /**
         * 是否为逻辑库，取值如下：
         * - **true**：逻辑库
         * - **false**：物理库
         * > 如果取值为**true**，目标数据库必须为逻辑库。
         * @example `true`
         */
        Logic: boolean;
        /**
         * 是否跳过SQL行数校验，返回值如下：
         * - **true**
         * - **false**
         * @example `true`
         */
        IgnoreAffectRows: boolean;
        /**
         * 跳过SQL行数校验的原因。当您需要跳过行数校验时必须填该参数。
         * @example `仅测试，不影响业务，无需校验。`
         */
        IgnoreAffectRowsReason: string;
        /**
         * 执行的导出SQL语句。
         * @example `SELECT * FROM DMS_test
         LIMIT 20;`
         */
        ExeSQL: string;
        /**
         * 水印相关信息。
         */
        Watermark: {
            /**
             * 水印嵌入类型。
             */
            WatermarkTypes: string[];
            /**
             * 主键或唯一键。
             */
            Keys: string[];
            /**
             * 数据水印嵌入字段名称。
             * @example `user_number`
             */
            ColumnName: string;
            /**
             * 数据水印信息。
             * @example `测试`
             */
            DataWatermark: string;
            /**
             * 文件水印信息。
             * @example `测试`
             */
            FileWatermark: string;
        };
    };
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
}
