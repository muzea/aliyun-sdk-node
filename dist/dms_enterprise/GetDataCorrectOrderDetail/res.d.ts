export interface GetDataCorrectOrderDetailResponse {
    /**
     * 请求ID。
     * @example `427688B8-ADFB-4C4E-9D45-EF5C1FD6E23D`
     */
    RequestId: string;
    /**
     * 数据变更工单详情信息。
     */
    DataCorrectOrderDetail: {
        PreCheckDetail: {
            /**
             * 预校验详情信息列表。
             */
            TaskCheckDO: {
                /**
                 * 校验步骤提示信息。
                 * @example `tip messsage`
                 */
                UserTip: string;
                /**
                 * 预校验状态，返回值如下：
                 * - **WAITING**：等待检查
                 * - **RUNNING**：检查中
                 * - **SUCCESS**：通过
                 * - **FAIL**：不通过
                 * @example `SUCCESS`
                 */
                CheckStatus: string;
                /**
                 * 检查步骤，返回值如下：
                 * - **SQL_PARSE**：解析
                 * - **SQL_TYPE_CHECK**：类型检查
                 * - **PERMISSION_CHECK**：权限检查
                 * - **ROW_CHECK**：行数检查
                 * @example `PERMISSION_CHECK`
                 */
                CheckStep: string;
            }[];
        };
        /**
         * 工单详情信息。
         */
        OrderDetail: {
            /**
             * 回滚SQL。
             * @example `empty`
             */
            RbSQL: string;
            /**
             * 回滚SQL附件。
             * @example `test`
             */
            RbAttachmentName: string;
            /**
             * 变更原因分类。
             * @example `test`
             */
            Classify: string;
            /**
             * 执行的SQL语句。
             * @example `update t1 set name = 'xxx' where id <= 100`
             */
            ExeSQL: string;
            /**
             * 预估影响行数 。
             * @example `100`
             */
            EstimateAffectRows: number;
            /**
             * 回滚SQL类型，返回值如下：
             * - **TEXT**：文本
             * -  **ATTACHMENT**：附件
             * @example `text`
             */
            RbSQLType: string;
            /**
             * 系统校验的影响行数。
             * @example `100`
             */
            ActualAffectRows: number;
            /**
             * 是否忽略预校验，返回值如下：
             * - **true**：忽略预校验
             * - **false**：不忽略预校验
             * @example `false`
             */
            IgnoreAffectRows: boolean;
            /**
             * SQL附件。
             * @example `xxx`
             */
            AttachmentName: string;
            /**
             * SQL类型，返回值如下：
             * - **TEXT**：文本
             * -  **ATTACHMENT**：附件
             * @example `text`
             */
            SqlType: string;
            /**
             * 忽略预校验原因。
             * @example `test`
             */
            IgnoreAffectRowsReason: string;
        };
        DatabaseList: {
            /**
             * 变更库信息列表。
             */
            Database: {
                /**
                 * 数据库ID。
                 * @example `1860****`
                 */
                DbId: number;
                /**
                 * 数据库类型。
                 * @example `mysql`
                 */
                DbType: string;
                /**
                 * 是否为逻辑库，返回值如下：
                 * - **true**：逻辑库。
                 * - **false**：物理库。
                 * @example `false`
                 */
                Logic: boolean;
                /**
                 * 数据库搜索名。
                 * @example `xxx@xxx:3306`
                 */
                SearchName: string;
                /**
                 * 环境类型，返回值如下：
                 * - product：生产环境
                 * - dev：开发环境
                 * - pre：预发环境
                 * - test：测试环境
                 * - sit：SIT环境
                 * - uat：UAT环境
                 * - pet：压测环境
                 * - stag：STAG环境
                 * @example `product`
                 */
                EnvType: string;
            }[];
        };
        /**
         * 数据变更工单特有的状态，返回值如下：
         * > 此状态与工单状态码不完全等价，若需要得到工单状态，请通过[GetOrderBaseInfo](~~465868~~)返回的StatusCode属性获取。
         * - **new**：新建。
         * - **precheck**：预检查阶段。
         * - **precheck_fail**：预检查失败。
         * - **precheck_success**：预检查成功, 等待提交审批。
         * - **toaudit**：审批中。
         * - **approved**：审批通过。
         * - **reject**：审批拒绝。
         * - **waiting**：任务已提交，待调度处理。
         * - **processing**：执行中。
         * - **success**：执行成功。
         * @example `approved`
         */
        Status: string;
        /**
         * 工单执行方式，返回值如下：
         * - **COMMITOR** : 审批通过后，提交者执行。
         * - **AUTO** : 审批通过后，自动执行。
         * - **LAST_AUDITOR** : 审批通过后，最后一个审批人执行。
         * @example `COMMITOR`
         */
        ExecMode: string;
        /**
         * 工单配置信息，主要用于存储不同数据变更工单类型的差异化配置信息。
         */
        ConfigDetail: {
            /**
             * 标识变更工单信息类型，取值和说明如下：
             * - COMMON：普通数据变更。
             * - CHUNK_DML：无锁变更。
             * - BIG_FILE：数据导入。
             * - CRON_CLEAR_DATA：历史数据清理。
             * - PROCEDURE：可编程对象。
             * @example `BIG_FILE`
             */
            DetailType: string;
            /**
             * 当 DetailType为 BIG_FILE时，标识数据导入的文件类型，取值如下：
             * - **SQL**：SQL文件。
             * - **CSV**：CSV文件。
             * - **EXCEL**：Excel文件。
             * - **JSON**：JSON文件，仅MongoDB支持。
             * @example `CSV`
             */
            FileType: string;
            /**
             * 数据导入表名，仅当DetailType为BIG_FILE时有效，若FileType取值为SQL，则此属性为空。
             * @example `tb_import_tb_name`
             */
            CsvTableName: string;
            /**
             * 文件编码，注意取值可能为空，为空则代表AUTO，取值如下：
             * - **AUTO**：自动识别
             * - **UTF-8**：UTF8编码
             * - **GBK**：GBK编码
             * - **ISO-8859-1**：ISO-8859-1编码
             * @example `UTF-8`
             */
            FileEncoding: string;
            /**
             * 是否为历史数据清理定时任务，预留字段，当且仅当DetailType为CRON_CLEAR_DATA有效。
             * @example `true`
             */
            Cron: boolean;
            /**
             * 当DetailType为CRON_CLEAR_DATA时有效，表示已调度次数。
             * @example `0`
             */
            CronCallTimes: number;
            /**
             * 当DetailType为CRON_CLEAR_DATA时有效，表示定时任务Cron表达式。
             * @example `0 0 2 * * ?`
             */
            CronFormat: string;
            /**
             * 当DetailType为CRON_CLEAR_DATA时有效，表示定时清理执行时长，单位为小时。当取值大于0，表示设置了清理时长。
             * @example `1`
             */
            Duration: number;
            /**
             * 定时任务状态，为空表示未调度，其他取值和说明如下：
             * - PAUSE：调度暂停。
             * - WAITING：待调度。
             * - SUCCESS：调度完成。
             * @example `SUCCESS`
             */
            CronStatus: string;
            /**
             * 最近一次调度时间。
             * @example `2024-04-19 02:00:00.0`
             */
            CronLastCallStartTime: string;
            /**
             * 下一次调度时间。仅当调度状态为SUCCESS时才会有显示。
             * @example `2024-04-19 02:00:00
            `
             */
            CronNextCallTime: string;
            /**
             * 当前数据变更任务ID，保留字段，业务暂时不依赖。
             * @example `13***`
             */
            CurrentTaskId: number;
            /**
             * 当DetailType为BIG_FILE，即为数据导入工单时，此处提供数据导入附加配置信息。
             */
            ImportExtConfig: {
                /**
                 * 插入类型，取值如下：
                 * - **INSERT**：插入数据时数据库会检查主键（PrimaryKey），如果出现重复会报错。
                 * -  **INSERT_IGNORE**：如果表中已经存在相同的记录，则忽略当前新数据。
                 * - **REPLACE_INTO**：如果表中已经有某行数据（根据主键或者唯一索引判断），则先删除此行数据，然后插入新的数据。
                 * > 如果FileType为CSV或者为EXCEL，该参数有效。
                 * @example `INSERT`
                 */
                InsertType: string;
                /**
                 * CSV格式的类型，取值如下：
                 * - **true**：CSV表格首行是字段名。
                 * - **false**：CSV表格首行是数据。
                 * > 如果**FileType**为**CSV**或者为**EXCEL**，该参数有效。
                 * @example `true`
                 */
                CsvFirstRowIsColumnDef: boolean;
                /**
                 * 是否忽略报错，取值：
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
            };
            /**
             * 当且仅当DetailType为CRON_CLEAR_DATA，即为历史数据清理工单时，此处提供历史数据清理额外配置信息。
             */
            CronExtConfig: {
                /**
                 * 是否启用自动Optimize table，取值：
                 * - **0**：不启用。
                 * - **大于0**：启用，表示每隔多少次清理以后再进行Optimize table。
                 * @example `0`
                 */
                OptimizeTableAfterEveryClearTimes: number;
                /**
                 * 已进行自动optimize table的次数。仅当OptimizeTableAfterEveryClearTimes大于0时有效。
                 * @example `0`
                 */
                CurrentClearTaskCount: number;
            };
        };
    };
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
}
