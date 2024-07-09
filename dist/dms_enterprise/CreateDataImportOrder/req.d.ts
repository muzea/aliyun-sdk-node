export interface CreateDataImportOrderRequest {
    /**
     * 数据导入的业务背景，以减少沟通成本。
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
         * 数据导入原因。
         * @example `test`
         */
        Classify: string;
        /**
         * 导入数据的附件Key（AttachmentKey），可通过调用接口[GetUserUploadFileJob](~~206069~~)获取该参数的值。
         * @example `upload_big_file_test_orders`
         */
        AttachmentName: string;
        /**
         * 待导入的数据库列表，当前仅支持导入一个库。
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
             * > 如果取值为**true**，目标数据库必须为逻辑库。
             * @example `false`
             */
            Logic: boolean;
        }[];
        /**
         * 文件类型，取值如下：
         * - **SQL**：SQL文件
         * - **CSV**：CSV文件
         * @example `CSV`
         */
        FileType: string;
        /**
         * 文件编码，取值如下：
         * - **AUTO**：自动识别
         * - **UTF-8**：UTF8编码
         * - **GBK**：GBK编码
         * - **ISO-8859-1**：ISO-8859-1编码
         * @example `AUTO`
         */
        FileEncoding: string;
        /**
         * 选择CSV格式文件导入数据的目标表。
         * > 如果**FileType**为**CSV**，该参数必填。
         * @example `Table_text`
         */
        TableName: string;
        /**
         * 插入类型，取值如下：
         * - **INSERT**：插入数据时数据库会检查主键（PrimaryKey），如果出现重复会报错。
         * -  **INSERT_IGNORE**：如果表中已经存在相同的记录，则忽略当前新数据。
         * - **REPLACE_INTO**：如果表中已经有某行数据（根据主键或者唯一索引判断），则先删除此行数据，然后插入新的数据。
         * > 如果**FileType**为**CSV**，该参数必填。
         * @example `INSERT`
         */
        InsertType: string;
        /**
         * CSV格式的类型，取值如下：
         * - **true**：CSV表格首行是字段名。
         * - **false**：CSV表格首行是数据。
         * > 如果**FileType**为**CSV**，该参数必填。
         * @example `true`
         */
        CsvFirstRowIsColumnDef: boolean;
        /**
         * 是否忽略报错，取值如下：
         * - **true**：忽略，遇到错误会跳过当前失败SQL脚本，继续执行。
         * - **false**：不忽略，遇到出错则中断后面的SQL脚本，不再执行。
         * @example `false`
         */
        IgnoreError: boolean;
        /**
         * 导入模式，取值如下：
         * - **FAST_MODE**：极速模式，在执行阶段读取文件，将SQL语句直接执行到指定的目标库。该模式安全性相比安全模式要低，但是执行时效较高。
         * - **SAFE_MODE**：安全模式，在预检查阶段会解析文件并将SQL或CSV数据缓存入库，执行时再从缓存库中读出来执行到指定的目标库。该模式安全性较好，但是执行时效相比极速模式要低。
         * @example `FAST_MODE`
         */
        ImportMode: string;
        /**
         * 回滚SQL语句。
         * > 如果**RollbackSqlType**为**TEXT**，该参数必填。
         * @example `empty`
         */
        RollbackSQL: string;
        /**
         * 回滚SQL附件Key（AttachmentKey），可通过调用接口[GetUserUploadFileJob](~~206069~~)获取该参数的值。
         * > 如果**RollbackSqlType**为**ATTACHMENT**，该参数必填。
         * @example `rollback.sql`
         */
        RollbackAttachmentName: string;
        /**
         * 回滚SQL的提交方式，取值如下：
         * - **TEXT**：文本
         * - **ATTACHMENT**：附件
         * @example `TEXT`
         */
        RollbackSqlType: string;
    };
    /**
     * 工单附件Key，补充当前工单信息。可通过调用接口[GetUserUploadFileJob](~~206069~~)获取该参数的值。
     * @example `order_attachment.txt`
     */
    "AttachmentKey"?: string;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
