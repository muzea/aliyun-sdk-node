export interface GetFileResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `The connection does not exist.`
     */
    ErrorMessage: string;
    /**
     * 请求ID。用于出现错误后排查问题。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 文件的详情。
     */
    Data: {
        /**
         * 文件的基本信息。
         */
        File: {
            /**
             * 文件当前的提交状态，包括0（未提交最新的代码）和1（已提交最新的代码）。
             * @example `0`
             */
            CommitStatus: number;
            /**
             * 文件是否开启自动解析功能。取值如下：
             * - true：文件会自动解析代码。
             * - false：文件不会自动解析代码。
             * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>调度依赖”选择“同周期”时的“代码解析”对应。
             * @example `true`
             */
            AutoParsing: boolean;
            /**
             * 文件责任人的阿里云用户ID。
             * @example `7775674356****`
             */
            Owner: string;
            /**
             * 文件创建的时间戳，单位为毫秒。
             * @example `1593879116000`
             */
            CreateTime: number;
            /**
             * 文件的代码类型。常用的代码及其对应的文件类型包括6（Shell）、10（ODPS SQL）、11（ODPS MR）、23（数据集成）、24（ODPS Script）、99（虚拟节点）、221（PyODPS 2）、225（ODPS Spark）、227（EMR Hive）、228（EMR Spark）、229（EMR Spark SQL）、230（EMR MR）、239（OSS对象检查）、257（EMR Shell）、258（EMR Spark Shell）、259（EMR Presto）、260（EMR Impala）、900（实时同步）、1089（跨租户节点）、1091（Hologres开发）、1093（Hologres SQL）、1100（赋值节点）、1221（PyODPS 3）。
             * @example `10`
             */
            FileType: number;
            /**
             * 文件当前已经提交的最新版本号。
             * @example `3`
             */
            CurrentVersion: number;
            /**
             * 文件所属业务流程的ID。该字段已废弃，请使用BusinessId字段。
             * @example `1000001`
             */
            BizId: number;
            /**
             * 最近一次编辑文件的阿里云用户ID。
             * @example `62465892****`
             */
            LastEditUser: string;
            /**
             * 文件的名称。
             * @example `ods_user_info_d`
             */
            FileName: string;
            /**
             * 执行文件对应的任务时，所使用的数据源名称。
             * @example `odps_source`
             */
            ConnectionName: string;
            /**
             * 文件所属的功能模块。取值如下：
             * - NORMAL：数据开发。
             * - MANUAL：手动任务。
             * - MANUAL_BIZ：手动业务流程。
             * - SKIP：数据开发的空跑调度。
             * - ADHOCQUERY：临时查询。
             * - COMPONENT：组件管理。
             * @example `NORMAL`
             */
            UseType: string;
            /**
             * 文件所属文件夹的ID。
             * @example `2735c2****`
             */
            FileFolderId: string;
            /**
             * 如果当前文件是组合节点文件的内部文件，该字段标识对应组合节点文件的ID。
             * @example `-1`
             */
            ParentId: number;
            /**
             * 文件创建人的阿里云用户ID。
             * @example `424732****`
             */
            CreateUser: string;
            /**
             * 标识该资源文件是否需要上传至MaxCompute。
             * 仅当文件是MaxCompute资源文件时才需要配置该参数。
             * @example `true`
             */
            IsMaxCompute: boolean;
            /**
             * 文件的业务流程ID。
             * @example `1000001`
             */
            BusinessId: number;
            /**
             * 文件的描述信息。
             * @example `我的第一个DataWorks文件`
             */
            FileDescription: string;
            /**
             * 文件的删除状态。取值如下：
             * - NORMAL：未删除。
             * - RECYCLE_BIN：回收站。
             * - DELETED：被删除。
             * @example `RECYCLE`
             */
            DeletedStatus: string;
            /**
             * 最近一次编辑文件的时间戳，单位为毫秒。
             * @example `1593879116000`
             */
            LastEditTime: number;
            /**
             * 文件的代码。
             * @example `SHOW TABLES;`
             */
            Content: string;
            /**
             * 提交文件后，在调度系统生成的调度任务ID。
             * @example `300001`
             */
            NodeId: number;
            /**
             * 任务的高级配置。
             * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，EMR数据开发任务，编辑页面右侧导航栏的“高级设置“对应。
             * > 当前EMR Shell任务不支持配置高级参数。
             * 各EMR任务开发的高级参数说明，请参见[EMR任务开发](~~473077~~)。
             * @example `{\"priority\":\"1\",\"ENABLE_SPARKSQL_JDBC\":false,\"FLOW_SKIP_SQL_ANALYZE\":false,\"queue\":\"default\"}`
             */
            AdvancedSettings: string;
            /**
             * 文件的ID。
             * @example `100000001`
             */
            FileId: number;
        };
        /**
         * 文件的调度配置。
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
             * 是否暂停调度，取值如下：
             * - true：暂停调度。
             * - false：不暂停调度。
             * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>时间属性>调度类型”配置为”暂停调度“时对应。
             * @example `false`
             */
            Stop: boolean;
            /**
             * 调度参数。
             * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>参数”对应。您可以参考[调度参数](~~137548~~)配置。
             * @example `a=x b=y`
             */
            ParaValue: string;
            /**
             * 开始自动调度的毫秒时间戳。
             * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>时间属性>生效日期”配置的开始时间的毫秒时间戳对应。
             * @example `936923400000`
             */
            StartEffectDate: number;
            /**
             * 停止自动调度的时间戳，单位为毫秒。
             * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>时间属性>生效日期”配置的结束时间的毫秒时间戳对应。
             * @example `4155787800000`
             */
            EndEffectDate: number;
            /**
             * 调度周期的类型，包括NOT_DAY（分钟、小时）和DAY（日、周、月）。
             * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>时间属性>调度周期”对应。
             * @example `DAY`
             */
            CycleType: string;
            /**
             * 当DependentType参数配置为USER_DEFINE时，用于设置当前文件具体依赖的节点ID。依赖多个节点时，使用英文逗号（,）分隔。
             * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>调度依赖”配置为“上一周期”后，依赖项选择”其他节点“时配置的内容对应。
             * @example `5,10,15,20`
             */
            DependentNodeIdList: string;
            /**
             * 文件发布成任务后，任务执行时对应的资源组。您可以调用[ListResourceGroups](~~173913~~)获取工作空间可用的资源组列表。
             * @example `375827434852437`
             */
            ResourceGroupId: number;
            /**
             * 依赖上一周期的方式。取值如下：
             * - SELF：依赖项选择本节点。
             * - CHILD：依赖项选择一级子节点。
             * - USER_DEFINE：依赖项选择其他节点。
             * - NONE：未选择依赖项，即不会依赖上一周期。
             * @example `USER_DEFINE`
             */
            DependentType: string;
            /**
             * 出错自动重跑的次数。
             * @example `3`
             */
            AutoRerunTimes: number;
            /**
             * 出错自动重跑时间间隔，单位为毫秒。
             * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>时间属性>出错自动重跑”的”重跑间隔“配置对应。
             * 控制台中“重跑间隔”的时间单位为分钟，请在调用时注意转换时间。
             * @example `120000`
             */
            AutoRerunIntervalMillis: number;
            /**
             * 文件定时调度的cron表达式。
             * @example `00 05 00 * * ?`
             */
            CronExpress: string;
            /**
             * 文件依赖的上游文件输出。
             */
            InputList: {
                /**
                 * 文件依赖的上游文件的输出名称。
                 * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>调度依赖“选择”同周期“时的”父节点输出名称”对应。
                 * @example `project.001_out`
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
             * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>调度依赖“选择”同周期“时的”本节点的输出名称”对应。
             */
            OutputList: {
                /**
                 * 文件的输出值。
                 * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>调度依赖“选择”同周期“时的“本节点的输出表”列的值对应。
                 * @example `ods_user_info_d`
                 */
                RefTableName: string;
                /**
                 * 文件的输出名称。
                 * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>调度依赖“选择”同周期“时的“本节点的输出名称”列值对应。
                 * @example `dw_project.002_out`
                 */
                Output: string;
            }[];
            /**
             * 发布后是否立即启动。
             * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，EMR Spark Streaming和EMR Streaming SQL数据开发任务，编辑页面右侧导航栏的“配置>时间属性>启动方式“对应。
             * @example `true`
             */
            StartImmediately: boolean;
            /**
             * 节点上下文输入参数。
             * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>节点上下文>本节点输入参数“对应。
             */
            InputParameters: {
                /**
                 * 节点上下文输入参数的参数名称。在代码中可以使用${...}方式引用该参数。
                 * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>节点上下文>本节点输入参数“的”参数名“对应。
                 * @example `input`
                 */
                ParameterName: string;
                /**
                 * 节点上下文输入参数的取值来源。
                 * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>节点上下文>本节点输入参数“的”取值来源“对应。
                 * @example `project_001.parent_node:outputs`
                 */
                ValueSource: string;
            }[];
            /**
             * 节点上下文输出参数。
             * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>节点上下文>本节点输出参数“对应。
             */
            OutputParameters: {
                /**
                 * 节点上下文输出参数的参数名称。
                 * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>节点上下文>本节点输出参数“的”参数名“对应。
                 * @example `output`
                 */
                ParameterName: string;
                /**
                 * 节点上下文输出参数的表达式。
                 * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>节点上下文>本节点输出参数“的”取值“对应。
                 * @example `${bizdate}`
                 */
                Value: string;
                /**
                 * 节点上下文输出参数表达式的类型。取值如下：
                 * - 1：表示常量。
                 * - 2：表示变量。
                 * - 3：表示参数节点透传变量。
                 * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>节点上下文>本节点输出参数“的”类型“对应。
                 * @example `1`
                 */
                Type: string;
                /**
                 * 节点上下文输出的参数描述。
                 * @example `It's a context output parameter.`
                 */
                Description: string;
            }[];
        };
    };
}
