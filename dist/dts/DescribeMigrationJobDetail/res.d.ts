export interface DescribeMigrationJobDetailResponse {
    /**
     * 请求ID。
     * @example `0AE3CD0B-4148-426F-A90E-952467CC****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 一页最多可展示的迁移实例数量。
     * @example `30`
     */
    PageRecordCount: number;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 调用错误时返回的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    DataInitializationDetailList: {
        /**
         * 全量数据迁移执行详情。
         */
        DataInitializationDetail: {
            /**
             * 源实例中迁移对象所属数据库的名称。
             * @example `dtstestdata`
             */
            SourceOwnerDBName: string;
            /**
             * 全量数据迁移状态，返回值：
             * - **NotStarted**：未启动。
             * - **Migrating**：迁移中。
             * - **Failed**：迁移失败。
             * - **Finished**：迁移完成。
             * @example `Finished`
             */
            Status: string;
            /**
             * 待迁移对象的表名。
             * @example `customer`
             */
            TableName: string;
            /**
             * 全量数据迁移失败的错误提示。
             * @example `java.lang.NumberFormatException: For input string: ""`
             */
            ErrorMessage: string;
            /**
             * 已迁移的记录数。
             * @example `200001`
             */
            FinishRowNum: string;
            /**
             * 全量数据迁移的耗时。
             * @example `0.0`
             */
            MigrationTime: string;
            /**
             * 目标实例中迁移对象所属数据库的名称。
             * @example `dtstestdata`
             */
            DestinationOwnerDBName: string;
            /**
             * 需迁移的总记录数。
             * @example `201477`
             */
            TotalRowNum: string;
        }[];
    };
    DataSynchronizationDetailList: {
        /**
         * 增量数据迁移执行详情。
         */
        DataSynchronizationDetail: {
            /**
             * 增量数据迁移状态，返回值：
             * - **NotStarted**：未启动。
             * - **Migrating**：迁移中。
             * - **Failed**：迁移失败。
             * - **Finished**：迁移完成。
             * @example `Migrating`
             */
            Status: string;
            /**
             * 源实例中迁移对象所属数据库的名称。
             * @example `dtstestdata`
             */
            SourceOwnerDBName: string;
            /**
             * 待迁移对象的表名。
             * @example `customer`
             */
            TableName: string;
            /**
             * 增量数据迁移失败的错误提示。
             * @example `任务失败太久无法恢复`
             */
            ErrorMessage: string;
            /**
             * 目标实例中迁移对象所属数据库的名称。
             * @example `dtstestdata`
             */
            DestinationOwnerDBName: string;
        }[];
    };
    StructureInitializationDetailList: {
        /**
         * 结构迁移执行详情。
         */
        StructureInitializationDetail: {
            /**
             * 结构迁移状态，返回值：
             * - **NotStarted**：未启动。
             * - **Migrating**：迁移中。
             * - **Failed**：迁移失败。
             * - **Finished**：迁移完成。
             * @example `Finished`
             */
            Status: string;
            /**
             * 源实例中待迁移对象所属数据库的名称。
             * @example `dtstestdata`
             */
            SourceOwnerDBName: string;
            /**
             * 迁移对象的结构语法定义。
             * @example `CREATE TABLE `dtstestdata`.`customer` (\n`runoob_id`  int(10) unsigned   auto_increment  COMMENT ''   NOT NULL   , \n`runoob_title`  varchar(100)  CHARSET `utf8` COLLATE `utf8_general_ci`    COMMENT ''   NOT NULL   , \n`runoob_author1216`  varchar(40)  CHARSET `utf8` COLLATE `utf8_general_ci`    COMMENT ''   NOT NULL   , \n`submission_date1216`  date     COMMENT ''   NULL   \n, PRIMARY KEY (`runoob_id`)) engine=InnoDB AUTO_INCREMENT=200001 DEFAULT CHARSET=`utf8` DEFAULT COLLATE `utf8_general_ci` ROW_FORMAT= Dynamic comment = '' ;\n`
             */
            ObjectDefinition: string;
            /**
             * 迁移对象类型，返回值：**Table**（表）、**Constraint**（约束）、**Index**（索引）、**View**（视图）、**Materialize View**（物化视图）、**Type**（自定义类型）、**Synonym**（同义词）、**Trigger**（触发器）、**Function**（函数）、**Procedure**（存储过程）、**Package**（包）、**Default**（默认值）、**Rule**（规则）、**PlanGuide**（执行计划）、**Sequence**（序列）。
             * @example `Table`
             */
            ObjectType: string;
            /**
             * 结构迁移失败的错误提示。
             * @example `DTS-1020042 Execute sql error sql: DTS-1020042 Execute sql error sql: ERROR: column \"id\" named in key does not exist`
             */
            ErrorMessage: string;
            /**
             * 目标实例中待迁移对象所属数据库的名称。
             * @example `dtstestdata`
             */
            DestinationOwnerDBName: string;
            /**
             * 迁移对象名称。
             * @example `customer`
             */
            ObjectName: string;
            ConstraintList: {
                /**
                 * 迁移对象对应的约束（例如索引、外键等）。
                 * > 只有当**ObjectType**为**Table**，且迁移对象有约束时，才会返回本参数。
                 */
                StructureInitializationDetail: {
                    /**
                     * 约束创建状态，返回值：
                     * - **NotStarted**：未启动。
                     * - **Migrating**：创建中。
                     * - **Failed**：创建失败。
                     * - **Finished**：创建完成。
                     * @example `Finished`
                     */
                    Status: string;
                    /**
                     * 源实例中迁移对象所属数据库的名称。
                     * @example `dtstestdata`
                     */
                    SourceOwnerDBName: string;
                    /**
                     * 创建约束的结构语法定义。
                     * @example `CREATE SEQUENCE "public"."collections_id_seq"   MINVALUE 1   MAXVALUE 9223372036854775807   START 249   INCREMENT BY 1 ; `
                     */
                    ObjectDefinition: string;
                    /**
                     * 迁移对象的类型，固定为**Table**。
                     * @example `Table`
                     */
                    ObjectType: string;
                    /**
                     * 约束创建失败的错误提示。
                     * @example `DTS-1020042 Execute sql error sql: ERROR: type "geometry" does not exist；`
                     */
                    ErrorMessage: string;
                    /**
                     * 目标实例中迁移对象所属数据库的名称。
                     * @example `dtstestdata`
                     */
                    DestinationOwnerDBName: string;
                    /**
                     * 迁移对象名称。
                     * @example `customer`
                     */
                    ObjectName: string;
                }[];
            };
        }[];
    };
}
