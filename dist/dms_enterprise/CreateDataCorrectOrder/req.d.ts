export interface CreateDataCorrectOrderRequest {
    /**
     * 业务背景，以减少沟通成本。
     * @example `test`
     */
    "Comment": string;
    /**
     * 相关人列表。
     */
    "RelatedUserList"?: number[];
    /**
     * 工单参数。
     */
    "Param": {
        /**
         * 数据变更原因。
         * @example `test`
         */
        Classify: string;
        /**
         * 预估本次变更会影响的数据行数。
         * @example `1`
         */
        EstimateAffectRows: number;
        /**
         * 变更SQL语句。
         * >  如果**SqlType**为**TEXT**，该参数必填。
         * @example `update base_user set id = 1 where id  = 1;`
         */
        ExecSQL: string;
        /**
         * 变更SQL的提交方式，取值如下：
         * - **TEXT**：文本
         * - **ATTACHMENT**：附件
         * @example `TEXT`
         */
        SqlType: string;
        /**
         * 变更SQL附件Key（AttachmentKey），可通过调用[GetUserUploadFileJob](~~206069~~)接口获取该参数的值。
         * > 如果**SqlType**为**ATTACHMENT**，该参数必填。
         * @example `test.sql`
         */
        AttachmentName: string;
        /**
         * 回滚SQL语句。
         * > - 如果**RollbackSqlType**为**TEXT**，该参数必填。
         * @example `update base_user set id = 1 where id  = 1;`
         */
        RollbackSQL: string;
        /**
         * 回滚SQL附件Key（AttachmentKey），可通过调用[GetUserUploadFileJob](~~206069~~)接口获取该参数的值。
         * > 如果**RollbackSqlType**为**ATTACHMENT**，该参数必填。
         * @example `test_rollback.sql`
         */
        RollbackAttachmentName: string;
        /**
         * 回滚SQL的提交方式，取值如下：
         * - **TEXT**：文本
         * - **ATTACHMENT**：附件
         * @example `TEXT`
         */
        RollbackSqlType: string;
        /**
         * 变更的数据库列表。
         */
        DbItemList: {
            /**
             * 数据库ID（DatabaseId），数据库分为物理库和逻辑库两种：
             * - 物理库ID：可通过调用接口[ListDatabases](~~141873~~)或[SearchDatabase](~~141876~~)获取该参数的值。
             * - 逻辑库ID：可通过调用接口[ListLogicDatabases](~~141874~~)或[SearchDatabase](~~141876~~)获取该参数的值。
             * @example `1860****`
             */
            DbId: number;
            /**
             * 是否为逻辑库，取值如下：
             * - **true**：逻辑库
             * - **false**：物理库
             * @example `false`
             */
            Logic: boolean;
        }[];
        /**
         * 工单执行方式，取值如下：
         * - **COMMITOR** : 审批通过后，提交者执行。
         * - **AUTO** : 审批通过后，自动执行。
         * - **LAST_AUDITOR** : 审批通过后，最后一个审批人执行。
         * @example `COMMITOR`
         */
        ExecMode: string;
    };
    /**
     * 工单附件Key，补充当前工单信息。可通过调用[GetUserUploadFileJob](~~206069~~)接口获取该参数的值。
     * @example `order_attachment.txt`
     */
    "AttachmentKey"?: string;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
