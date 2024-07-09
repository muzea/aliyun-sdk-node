export interface DescribeInitializationStatusResponse {
    /**
     * 请求ID。
     * @example `150DECD9-13FF-4929-A5DE-855BE9CC****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 调用错误时返回对应的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
    /**
     * 全量数据初始化详情。
     */
    DataInitializationDetails: {
        /**
         * 源实例中待同步对象所属数据库的名称。
         * @example `dtstestdata`
         */
        SourceOwnerDBName: string;
        /**
         * 全量数据初始化的状态，返回值：
         * - **NotStarted**：未启动。
         * - **Migrating**：初始化中。
         * - **Failed**：初始化失败。
         * - **Finished**：初始化完成。
         * @example `Finished`
         */
        Status: string;
        /**
         * 全量同步初始化的耗时。
         * @example `0.0`
         */
        UsedTime: string;
        /**
         * 同步对象的表名。
         * @example `customer`
         */
        TableName: string;
        /**
         * 全量数据初始化失败时返回对应的失败信息。
         * @example `java.lang.NumberFormatException: For input string: ""`
         */
        ErrorMessage: string;
        /**
         * 已完成同步的行数。
         * > 该参数表示实际同步的总行数，而参数**TotalRowNum**的值来源于同步开始前源库的系统表，由于同步时间差，会导致两者的值会有出入。
         * @example `9993`
         */
        FinishRowNum: string;
        /**
         * 目标实例中待同步对象所属数据库的名称。
         * @example `dtstestdata`
         */
        DestinationOwnerDBName: string;
        /**
         * 需同步的总行数。
         * > 该参数的值来源于同步开始前源库的系统表，而参数**FinishRowNum**表示实际同步的总行数，由于同步时间差，会导致两者的值会有出入。
         * @example `9981`
         */
        TotalRowNum: string;
    }[];
    /**
     * 增量数据同步详情。
     * > 该参数合集及包含的返回参数即将下线。
     */
    DataSynchronizationDetails: {
        /**
         * 增量数据同步的状态，返回值：
         * - **NotStarted**：未启动。
         * - **Migrating**：同步中。
         * - **Failed**：同步失败。
         * - **Finished**：同步完成。
         * @example `Migrating`
         */
        Status: string;
        /**
         * 源实例中待同步对象所属数据库的名称。
         * @example `dtstestdata`
         */
        SourceOwnerDBName: string;
        /**
         * 同步对象的表名。
         * @example `customer`
         */
        TableName: string;
        /**
         * 增量数据同步失败时返回对应的失败信息。
         * @example `任务失败太久无法恢复`
         */
        ErrorMessage: string;
        /**
         * 目标实例中待同步对象所属数据库的名称。
         * @example `dtstestdata`
         */
        DestinationOwnerDBName: string;
    }[];
    /**
     * 结构初始化详情。
     */
    StructureInitializationDetails: {
        /**
         * 结构初始化的状态。返回值：
         * - **NotStarted**：未启动。
         * - **Migrating**：初始化中。
         * - **Failed**：初始化失败。
         * - **Finished**：初始化完成。
         * @example `Finished`
         */
        Status: string;
        /**
         * 源实例中待同步对象所属数据库的名称。
         * @example `dtstestdata`
         */
        SourceOwnerDBName: string;
        /**
         * 同步对象的结构语法定义。
         * @example `CREATE TABLE `dtstestdata`.`customer` (\n`customer_id`  int(10) unsigned   auto_increment  COMMENT ''   NOT NULL   , \n`customer_title`  varchar(100)  CHARSET `utf8` COLLATE `utf8_general_ci`    COMMENT ''   NOT NULL   , \n`customer_company1216`  varchar(40)  CHARSET `utf8` COLLATE `utf8_general_ci`    COMMENT ''   NOT NULL   , \n`submission_date1216`  date     COMMENT ''   NULL   \n, PRIMARY KEY (`customer_id`)) engine=InnoDB AUTO_INCREMENT=200001 DEFAULT CHARSET=`utf8` DEFAULT COLLATE `utf8_general_ci` ROW_FORMAT= Dynamic comment = '' ;\n`
         */
        ObjectDefinition: string;
        /**
         * 同步对象的类型。返回值如下：
         * **Table**（表）、**Constraint**（约束）、**Index**（索引）、**View**（视图）、**Materialize View**（物化视图）、**Type**（自定义类型）、**Synonym**（同义词）、**Trigger**（触发器）、**Function**（函数）、**Procedure**（存储过程）、**Package**（包）、**Default**（默认值）、**Rule**（规则）、**PlanGuide**（执行计划）、**Sequence**（序列）。
         * @example `Table`
         */
        ObjectType: string;
        /**
         * 结构初始化失败时返回对应的失败信息。
         * @example `DTS-1020042 Execute sql error sql: Table 'customer' already exists`
         */
        ErrorMessage: string;
        /**
         * 目标实例中待同步对象所属数据库的名称。
         * @example `dtstestdata`
         */
        DestinationOwnerDBName: string;
        /**
         * 同步对象的名称。
         * @example `customer`
         */
        ObjectName: string;
        /**
         * 同步对象对应的约束（例如索引、外键等）。
         * > 只有**ObjectType**为**Table**，且同步对象有约束，才会返回本参数。
         */
        Constraints: {
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
             * 源实例中待同步对象所属数据库的名称。
             * @example `dtstestdata`
             */
            SourceOwnerDBName: string;
            /**
             * 创建约束的结构语法定义。
             * @example `CREATE SEQUENCE "public"."collections_id_seq"   MINVALUE 1   MAXVALUE 9223372036854775807   START 249   INCREMENT BY 1 ; `
             */
            ObjectDefinition: string;
            /**
             * 同步对象的类型，固定为**Table**。
             * @example `Table`
             */
            ObjectType: string;
            /**
             * 约束创建失败的错误提示。
             * @example `DTS-1020042 Execute sql error sql: ERROR: type "geometry" does not exist`
             */
            ErrorMessage: string;
            /**
             * 目标实例中待同步对象所属数据库的名称。
             * @example `dtstestdata`
             */
            DestinationOwnerDBName: string;
            /**
             * 该同步对象的名称。
             * @example `customer`
             */
            ObjectName: string;
        }[];
    }[];
}
