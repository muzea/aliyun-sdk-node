export interface CreateProcCorrectOrderRequest {
    /**
     * 工单备注。
     * @example `test`
     */
    "Comment": string;
    /**
     * 工单相关人列表。
     */
    "RelatedUserList"?: number[];
    /**
     * 工单参数。
     */
    "Param": {
        /**
         * 变更原因。
         * @example `test`
         */
        Classify: string;
        /**
         * 数据库信息。
         */
        DbItemList: {
            /**
             * 数据库ID（DatabaseId）。数据库分为物理库和逻辑库两种：
             * - 物理库ID：可调用接口[ListDatabases](~~141873~~)或[SearchDatabase](~~141876~~)获取该参数的值。
             * - 逻辑库ID：可调用接口[ListLogicDatabases](~~141874~~)或[SearchDatabase](~~141876~~)获取该参数的值。
             * @example `1972****`
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
         * 回滚SQL语句。
         * > 如果**RollbackSqlType**为**TEXT**，该参数必填。
         * @example `empty`
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
         * 变更SQL语句。
         * @example `DELIMITER ///
        CREATE PROCEDURE GetAllProducts()
        BEGIN
        SELECT *  FROM base_user;
        END ///`
         */
        ExecSQL: string;
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
     * 工单补充附件，对本次操作进行补充说明。
     * 您可以调用[GetUserUploadFileJob](~~206069~~)接口获取该参数。
     * @example `order_attachment.txt`
     */
    "AttachmentKey"?: string;
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `4***`
     */
    "Tid"?: number;
}
