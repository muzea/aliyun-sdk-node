export interface GetIDEEventDetailResponse {
    /**
     * 请求的唯一标识，用于后续错误排查使用。
     * @example `8abcb91f-d266-4073-b907-2ed670378ed1`
     */
    RequestId: string;
    /**
     * 触发扩展点事件时的数据快照。
     * 不同类型的消息事件，数据快照的有效字段存在差异，具体请参考各消息事件的字段说明。
     */
    EventDetail: {
        /**
         * 文件代码执行时的快照，当Message类型为IDE_FILE_EXECUTE_BEFORE时有效。
         */
        FileExecutionCommand: {
            /**
             * 文件的ID。
             * @example `1234123`
             */
            FileId: number;
            /**
             * 文件关联的数据源唯一标识。
             * @example `odps_source`
             */
            DataSourceName: string;
            /**
             * 生成本次文件版本的文件代码。
             * @example `SHOW TABLES;`
             */
            Content: string;
            /**
             * 文件类型。不同文件类型其代码不同，常用的代码及其表示的类型包括6（Shell）、10（ODPS SQL）、11（ODPS MR）、23（数据集成）、24（ODPS Script）、99（虚拟节点）、221（PyODPS 2）、225（ODPS Spark）、227（EMR Hive）、228（EMR Spark）、229（EMR Spark SQL）、230（EMR MR）、239（OSS对象检查）、257（EMR Shell）、258（EMR Spark Shell）、259（EMR Presto）、260（EMR Impala）、900（实时同步）、1089（跨租户节点）、1091（Hologres开发）、1093（Hologres SQL）、1100（赋值节点）、1221（PyODPS 3）。
             * @example `10`
             */
            FileType: number;
        };
        /**
         * 删除文件时的快照信息，当Message类型为IDE_FILE_DELETE_BEFORE时有效。
         */
        DeletedFile: {
            /**
             * 文件责任人。
             * @example `7384234****`
             */
            Owner: string;
            /**
             * 文件类型。不同文件类型其代码不同，常用的代码及其表示的类型包括6（Shell）、10（ODPS SQL）、11（ODPS MR）、23（数据集成）、24（ODPS Script）、99（虚拟节点）、221（PyODPS 2）、225（ODPS Spark）、227（EMR Hive）、228（EMR Spark）、229（EMR Spark SQL）、230（EMR MR）、239（OSS对象检查）、257（EMR Shell）、258（EMR Spark Shell）、259（EMR Presto）、260（EMR Impala）、900（实时同步）、1089（跨租户节点）、1091（Hologres开发）、1093（Hologres SQL）、1100（赋值节点）、1221（PyODPS 3）。
             * @example `10`
             */
            FileType: number;
            /**
             * 当前文件的最新版本。
             * @example `1`
             */
            CurrentVersion: number;
            /**
             * 文件所属的业务流程ID。
             * @example `74328`
             */
            BusinessId: number;
            /**
             * 文件名称。
             * @example `hello_dataworks.sql`
             */
            FileName: string;
            /**
             * 文件关联的数据源唯一标识。
             * @example `odps_source`
             */
            DataSourceName: string;
            /**
             * 文件所属的功能模块。取值如下：
             * - NORMAL：数据开发
             * - MANUAL：手动任务
             * - MANUAL_BIZ：手动业务流程
             * - SKIP：数据开发的空跑调度
             * - ADHOCQUERY：临时查询
             * - COMPONENT：组件管理
             * @example `NORMAL`
             */
            UseType: string;
            /**
             * 文件所属的文件夹ID，您可以调用[GetFolder](~~173952~~)接口，通过文件夹ID查询文件详情。
             * @example `aldurie78l2falure`
             */
            FolderId: string;
            /**
             * 文件所属的循环节点或遍历节点的节点ID。
             * @example `1234122`
             */
            ParentFileId: number;
            /**
             * 生成本次文件版本的文件代码。
             * @example `SHOW TABLES;`
             */
            Content: string;
            /**
             * 调度节点的ID。
             * @example `421429`
             */
            NodeId: number;
            /**
             * 文件的ID。
             * @example `1234123`
             */
            FileId: number;
        };
        /**
         * 文件提交和发布时的快照。
         * 仅当Message类型为IDE_FILE_SUBMIT_BEFORE或IDE_FILE_DEPLOY_BEFORE时有效。
         */
        CommittedFile: {
            /**
             * 文件的ID。
             * @example `1234123`
             */
            FileId: number;
            /**
             * 生成本次文件版本的文件代码。
             * @example `SHOW TABLES;`
             */
            Content: string;
            /**
             * 生成本次文件版本的阿里云用户ID。
             * @example `7384234****`
             */
            Committor: string;
            /**
             * 文件类型。不同文件类型其代码不同，常用的代码及其表示的类型包括6（Shell）、10（ODPS SQL）、11（ODPS MR）、23（数据集成）、24（ODPS Script）、99（虚拟节点）、221（PyODPS 2）、225（ODPS Spark）、227（EMR Hive）、228（EMR Spark）、229（EMR Spark SQL）、230（EMR MR）、239（OSS对象检查）、257（EMR Shell）、258（EMR Spark Shell）、259（EMR Presto）、260（EMR Impala）、900（实时同步）、1089（跨租户节点）、1091（Hologres开发）、1093（Hologres SQL）、1100（赋值节点）、1221（PyODPS 3）。
             * @example `10`
             */
            FileType: number;
            /**
             * 本次文件版本的变更类型，包括CREATE、UPDATE和DELETE。
             * @example `UPDATE`
             */
            ChangeType: string;
            /**
             * 文件名称。
             * @example `hello_dataworks.sql`
             */
            FileName: string;
            /**
             * 调度节点的ID。
             * @example `421429`
             */
            NodeId: number;
            /**
             * 本次文件版本的说明。
             * @example `第二次版本提交`
             */
            Comment: string;
            /**
             * 文件所属的功能模块。取值如下：
             * - NORMAL：数据开发
             * - MANUAL：手动任务
             * - MANUAL_BIZ：手动业务流程
             * - SKIP：数据开发的空跑调度
             * - ADHOCQUERY：临时查询
             * - COMPONENT：组件管理
             * @example `NORMAL`
             */
            UseType: string;
            /**
             * 文件的更多属性。
             */
            FilePropertyContent: {
                /**
                 * 文件关联的数据源唯一标识。
                 * @example `odps_source`
                 */
                DataSourceName: string;
                /**
                 * 文件所属的循环节点或遍历节点的节点ID。
                 * @example `1234122`
                 */
                ParentFileId: number;
                /**
                 * 文件所属的业务流程ID。
                 * @example `74328`
                 */
                BusinessId: number;
                /**
                 * 当前文件的最新版本。
                 * @example `1`
                 */
                CurrentVersion: number;
                /**
                 * 文件责任人。
                 * @example `7384234****`
                 */
                Owner: string;
                /**
                 * 文件所属的文件夹ID，您可以调用[GetFolder](~~173952~~)接口，通过文件夹ID查询文件详情。
                 * @example `aldurie78l2falure`
                 */
                FolderId: string;
            };
            /**
             * 文件的调度属性配置。
             */
            NodeConfiguration: {
                /**
                 * 重跑属性。取值如下：
                 * - ALL_ALLOWED：运行成功或失败后皆可重跑。
                 * - FAILURE_ALLOWED：运行成功后不可重跑，运行失败后可以重跑。
                 * - ALL_DENIED：运行成功或失败皆不可重跑。
                 * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>时间属性>重跑属性”配置内容对应。
                 * @example `ALL_ALLOWED`
                 */
                RerunMode: string;
                /**
                 * 调度的类型，取值如下：
                 * - NORMAL：正常调度任务。
                 * - MANUAL：手动任务，不会被日常调度，对应手动业务流程下的节点。
                 * - PAUSE：暂停任务。
                 * - SKIP：空跑任务，被日常调度，但启动调度时直接被置为成功。
                 * @example `NORMAL`
                 */
                SchedulerType: string;
                /**
                 * 调度参数。
                 * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>参数”对应。您可以参考[调度参数](~~137548~~)配置。
                 * @example `a=x b=y`
                 */
                ParaValue: string;
                /**
                 * 调度周期的类型，包括NOT_DAY（分钟、小时）和DAY（日、周、月）。
                 * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>时间属性>调度周期”对应。
                 * @example `DAY`
                 */
                CycleType: string;
                /**
                 * 当DependentType参数配置为USER_DEFINE时，用于设置当前文件具体依赖的节点ID。依赖多个节点时，使用英文逗号（,）分隔。
                 * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>调度依赖>跨周期依赖（原上一周期）”，依赖项选择”其他节点“时配置的内容对应。
                 * @example `5,10,15,20`
                 */
                DependentNodeIdList: string;
                /**
                 * 文件发布成任务后，任务执行时使用的资源组。您可以调用[ListResourceGroups](~~173913~~)获取工作空间可用的资源组列表。
                 * @example `375827434852437`
                 */
                ResourceGroupId: number;
                /**
                 * 自动重跑次数。
                 * @example `3`
                 */
                AutoRerunTimes: number;
                /**
                 * 自动重跑间隔毫秒数。
                 * @example `120000`
                 */
                AutoRerunIntervalMillis: number;
                /**
                 * 调度Cron表达式。
                 * @example `00 05 00 * * ?`
                 */
                CronExpress: string;
                /**
                 * 文件依赖的上游文件输出。
                 */
                InputList: {
                    /**
                     * 文件依赖的上游文件的输出名称。
                     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>调度依赖>依赖上游节点“的”上游节点输出名”对应。
                     * @example `dw_project_root`
                     */
                    Input: string;
                    /**
                     * 配置文件依赖的方式，取值如下：
                     * - MANUAL：手动配置。
                     * - AUTO：自动解析。
                     * @example `MANUAL`
                     */
                    ParseType: string;
                }[];
                /**
                 * 文件的输出。
                 * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>调度依赖>本节点输出名称“对应。
                 */
                OutputList: {
                    /**
                     * 文件的输出表名。
                     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>调度依赖>本节点输出名称“的“输出表名”对应。
                     * @example `ods_user_info_d`
                     */
                    RefTableName: string;
                    /**
                     * 文件的输出名称。
                     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>调度依赖>本节点输出名称“的“输出名”对应。
                     * @example `dw_project.002_out`
                     */
                    Output: string;
                }[];
                /**
                 * 依赖上一周期的方式。取值如下：
                 * - SELF：依赖项选择本节点。
                 * - CHILD：依赖项选择一级子节点。
                 * - USER_DEFINE：依赖项选择其他节点。
                 * - NONE：未选择依赖项，即不会依赖上一周期。
                 * @example `USER_DEFINE`
                 */
                DependentType: string;
            };
        };
        /**
         * 表提交和发布时的快照，当Message类型为IDE_TABLE_SUBMIT_BEFORE和IDE_TABLE_DEPLOY_BEFORE时有效。
         */
        TableModel: {
            /**
             * 表所属环境。取值如下：
             * - DEV：开发环境。
             * - PROD：生产环境。
             * @example `DEV`
             */
            Env: string;
            /**
             * 表的生命周期。单位为天。
             * @example `7`
             */
            LifeCycle: number;
            /**
             * 表名称。
             * @example `tb_hello`
             */
            TableName: string;
            /**
             * 表所属数据源的唯一标识。
             * @example `odps_source`
             */
            DataSourceName: string;
            /**
             * 字段列表。
             */
            Columns: {
                /**
                 * 字段名称。
                 * @example `ID`
                 */
                ColumnName: string;
                /**
                 * 字段类型。
                 * @example `BIGINT`
                 */
                ColumnType: string;
                /**
                 * 是否为分区字段，取值如下：
                 * - true：是分区字段。
                 * - false：非分区字段。
                 * @example `false`
                 */
                IsPartitionColumn: boolean;
                /**
                 * 字段备注。
                 * @example `ID`
                 */
                Comment: string;
            }[];
            /**
             * 表的备注信息。
             * @example `新建的一张表。`
             */
            Comment: string;
            /**
             * 外部表的Location信息。
             * @example `hdfs://path/to/object`
             */
            Location: string;
        };
    };
}
