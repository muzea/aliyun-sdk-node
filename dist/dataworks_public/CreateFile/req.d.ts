export interface CreateFileRequest {
    /**
     * 文件的路径。
     * @example `业务流程/第一个业务流程/MaxCompute/文件夹1/文件夹2`
     */
    "FileFolderPath"?: string;
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * 该参数与ProjectIdentifier参数，二者必须设置其一，用来确定本次API调用操作的DataWorks工作空间。
     * @example `10000`
     */
    "ProjectId"?: number;
    /**
     * 文件的名称。
     * @example `文件名`
     */
    "FileName": string;
    /**
     * 文件的描述信息。
     * @example `这里是文件描述`
     */
    "FileDescription"?: string;
    /**
     * 文件的代码类型。
     * 常用的代码及其对应的文件类型包括6（Shell）、10（ODPS SQL）、11（ODPS MR）、24（ODPS Script）、99（虚拟节点）、221（PyODPS 2）、225（ODPS Spark）、227（EMR Hive）、228（EMR Spark）、229（EMR Spark SQL）、230（EMR MR）、239（OSS对象检查）、257（EMR Shell）、258（EMR Spark Shell）、259（EMR Presto）、260（EMR Impala）、900（实时同步）、1089（跨租户节点）、1091（Hologres开发）、1093（Hologres SQL）、1100（赋值节点）、1221（PyODPS 3）。
     * 您可以调用[ListFileType](~~212428~~)接口，查询文件的代码类型。
     * @example `10`
     */
    "FileType": number;
    /**
     * 文件责任人的阿里云用户ID。如果该参数为空，则默认使用调用者的阿里云用户ID。
     * @example `1000000000001`
     */
    "Owner"?: string;
    /**
     * 文件代码内容，不同代码类型（fileType）的文件，代码格式不同。您可以在运维中心找到对应类型的任务，右键单击查看代码，查看具体的代码格式。
     * @example `SHOW TABLES;`
     */
    "Content"?: string;
    /**
     * 出错自动重跑的次数，取值最大为10。
     * @example `3`
     */
    "AutoRerunTimes"?: number;
    /**
     * 出错自动重跑时间间隔，单位为毫秒。最大为1800000毫秒（30分钟）。
     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>时间属性>出错自动重跑”的”重跑间隔“配置对应。
     * 控制台中“重跑间隔”的时间单位为分钟，请在调用时注意转换时间。
     * @example `120000`
     */
    "AutoRerunIntervalMillis"?: number;
    /**
     * 重跑属性。取值如下：
     * - ALL_ALLOWED：运行成功或失败后皆可重跑。
     * - FAILURE_ALLOWED：运行成功后不可重跑，运行失败后可以重跑。
     * - ALL_DENIED：运行成功或失败皆不可重跑。
     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>时间属性>重跑属性”配置内容对应。
     * @example `ALL_ALLOWED`
     */
    "RerunMode"?: string;
    /**
     * 是否暂停调度，取值如下：
     * - true：暂停调度。
     * - false：不暂停调度。
     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>时间属性>调度类型”配置为”暂停调度“时对应。
     * @example `false`
     */
    "Stop"?: boolean;
    /**
     * 调度参数。多个参数之间用空格进行分割。
     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>参数”对应。您可以参考[调度参数](~~137548~~)配置。
     * @example `a=x b=y`
     */
    "ParaValue"?: string;
    /**
     * 开始自动调度的毫秒时间戳。
     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>时间属性>生效日期”配置的开始时间的毫秒时间戳对应。
     * @example `1671608450000`
     */
    "StartEffectDate"?: number;
    /**
     * 停止自动调度的时间戳，单位为毫秒。
     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>时间属性>生效日期”配置的结束时间的毫秒时间戳对应。
     * @example `1671694850000`
     */
    "EndEffectDate"?: number;
    /**
     * 周期调度的cron表达式，该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>时间属性>cron表达式”对应。配置完“调度周期”及“定时调度时间”后，DataWorks会自动生成相应cron表达式。
     * 示例如下：
     * - 每天凌晨5点30分定时调度：`00 30 05 * * ?`
     * - 每个小时的第15分钟定时调度：`00 15 00-23/1 * * ?`
     * - 每隔十分钟调度一次：`00 00/10 * * * ?`
     * - 每天8点到17点，每隔十分钟调度一次：`00 00-59/10 8-17 * * * ?`
     * - 每月的1日0点20分自动调度：`00 20 00 1 * ?`
     * - 从1月1日0点10分开始，每过3个月调度一次：`00 10 00 1 1-12/3 ?`
     * - 每周二、周五的0点5分自动调度：`00 05 00 * * 2,5`
     * 由于DataWorks调度系统的规则，cron表达式有以下限制：
     * - 最短调度间隔时间为5分钟。
     * - 每天最早调度时间为0点5分。
     * @example `00 05 00 * * ?`
     */
    "CronExpress"?: string;
    /**
     * 调度周期的类型，包括NOT_DAY（分钟、小时）和DAY（日、周、月）。
     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>时间属性>调度周期”对应。
     * @example `DAY`
     */
    "CycleType"?: string;
    /**
     * 依赖上一周期的方式。取值如下：
     * - SELF：依赖项选择本节点。
     * - CHILD：依赖项选择一级子节点。
     * - USER_DEFINE：依赖项选择其他节点。
     * - NONE：未选择依赖项，即不会依赖上一周期。
     * - USER\_DEFINE\_AND\_SELF： 跨周期依赖本节点和其他节点的组合的情况
     * - CHILD\_AND\_SELF：跨周期依赖一层子节点和本节点的组合的情况
     * @example `NONE`
     */
    "DependentType"?: string;
    /**
     * 依赖上一周期的节点列表。
     * @example `abc`
     */
    "DependentNodeIdList"?: string;
    /**
     * 文件依赖的上游文件的输出名称，多个输出使用英文逗号（,）分隔。
     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>调度依赖“选择”同周期“时的”父节点输出名称”对应。
     * @example `project_root,project.file1,project.001_out`
     */
    "InputList"?: string;
    /**
     * DataWorks工作空间的名称。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间名称。
     * 该参数与ProjectId参数，二者必须设置其一，用来确定本次API调用操作的DataWorks工作空间。
     * @example `dw_project`
     */
    "ProjectIdentifier"?: string;
    /**
     * 文件发布成任务后，任务执行时对应的资源组。您可以调用[ListResourceGroups](~~173913~~)通过**identifier**字段获取工作空间可用的资源组列表。
     * > 您需确认ListResourceGroups接口返回的资源组已绑定至创建文件所使用的工作空间，绑定后才能在CreateFile中使用。
     * @example `group_375827434852437`
     */
    "ResourceGroupIdentifier"?: string;
    /**
     * 该字段已废弃，请勿使用。
     * 文件发布成任务后，任务执行时对应的资源组。对应页面上调度配置>资源属性>调度资源组的配置。与ResourceGroupIdentifier二者设置其一即可。
     * 您可以通过[ListResourceGroups](~~173913~~)接口获取工作空间可用的资源组列表。ResourceGroupType传1，拿到结果后取出ID字段。
     * @example `375827434852437`
     */
    "ResourceGroupId"?: number;
    /**
     * 文件发布成任务后，任务执行时连接的数据源。
     * 您可以调用[UpdateDataSource](~~211432~~)接口获取工作空间可用的数据源列表。
     * @example `odps_source`
     */
    "ConnectionName"?: string;
    /**
     * 文件是否开启自动解析功能。取值如下：
     * - true：文件会自动解析代码。
     * - false：文件不会自动解析代码。
     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>调度依赖”选择“同周期”时的“代码解析”对应。
     * @example `true`
     */
    "AutoParsing"?: boolean;
    /**
     * 调度的类型，取值如下：
     * - NORMAL：正常调度任务。
     * - MANUAL：手动任务，不会被日常调度，对应手动业务流程下的节点。
     * - PAUSE：暂停任务。
     * - SKIP：空跑任务，被日常调度，但启动调度时直接被置为成功。
     * @example `NORMAL`
     */
    "SchedulerType"?: string;
    /**
     * 任务的高级配置。
     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，EMR Spark Streaming和EMR Streaming SQL数据开发任务，编辑页面右侧导航栏的“高级设置“对应。
     * 当前仅EMR Spark Streaming和EMR Streaming SQL任务支持配置该参数，并且参数为JSON格式。
     * @example `{"queue":"default","SPARK_CONF":"--conf spark.driver.memory=2g"}`
     */
    "AdvancedSettings"?: string;
    /**
     * 发布后是否立即启动。
     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，EMR Spark Streaming和EMR Streaming SQL数据开发任务，编辑页面右侧导航栏的“配置>时间属性>启动方式“对应。
     * @example `true`
     */
    "StartImmediately"?: boolean;
    /**
     * 节点的上下文输入参数。参数为JSON格式，包含的字段可参考[GetFile](~~173954~~)接口返回值中的InputContextParameterList参数结构。
     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>节点上下文>本节点输入参数“对应。
     * @example `[{"ValueSource": "project_001.first_node:bizdate_param","ParameterName": "bizdate_input"}]`
     */
    "InputParameters"?: string;
    /**
     * 节点的上下文输出参数。参数为JSON格式，包含的字段可参考[GetFile](~~173954~~)接口返回值中的OutputContextParameterList参数结构。
     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>节点上下文>本节点输出参数“对应。
     * @example `[{"Type": 1,"Value": "${bizdate}","ParameterName": "bizdate_param"}]`
     */
    "OutputParameters"?: string;
    /**
     * 是否沿用上一周期空跑属性。取值如下：
     * - true：沿用上一周期空跑属性。
     * - false：不沿用上一周期空跑属性。
     * @example `false`
     */
    "IgnoreParentSkipRunningProperty"?: boolean;
    /**
     * 当参数中指定的目录（FileFolderPath）在系统中不存在时，是否自动创建此目录。取值如下：
     * true：若此目录不存在，自动创建此目录
     * false：若此目录不存在，调用失败
     * @example `false`
     */
    "CreateFolderIfNotExists"?: boolean;
}
