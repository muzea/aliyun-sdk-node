export interface UpdateFileRequest {
    /**
     * 文件所在的路径。
     * @example `业务流程/第一个业务流程/数据集成/文件夹1/文件夹2`
     */
    "FileFolderPath"?: string;
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间管理页面获取ID。
     * @example `10000`
     */
    "ProjectId"?: number;
    /**
     * 文件的名称。您可以通过重新设置FileName的值来修改文件名称。
     * 例如，使用[ListFiles](~~173942~~)接口查询目标目录下的文件ID，通过[UpdateFile](~~173951~~)接口，输入查询的文件ID至FileId参数，并配置FileName的参数值，即可修改相应文件的名称。
     * @example `ods_user_info_d`
     */
    "FileName"?: string;
    /**
     * 文件的描述。
     * @example `这里是文件描述`
     */
    "FileDescription"?: string;
    /**
     * 文件代码内容，不同代码类型（fileType）的文件，代码格式不同。您可以在运维中心，右键单击对应类型的任务，选择查看代码，查看具体的代码格式。
     * @example `SELECT "1";`
     */
    "Content"?: string;
    /**
     * 文件出错后，自动重跑的次数。
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
     * 调度参数。
     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>参数”对应。您可以参考[调度参数](~~137548~~)配置。
     * @example `x=a y=b z=c`
     */
    "ParaValue"?: string;
    /**
     * 开始自动调度的毫秒时间戳。
     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>时间属性>生效日期”配置的开始时间的毫秒时间戳对应。
     * @example `936923400000`
     */
    "StartEffectDate"?: number;
    /**
     * 停止自动调度的时间戳，单位为毫秒。
     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>时间属性>生效日期”配置的结束时间的毫秒时间戳对应。
     * @example `4155787800000`
     */
    "EndEffectDate"?: number;
    /**
     * 周期调度的cron表达式，该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>时间属性>cron表达式”对应。配置完“调度周期”及“定时调度时间”后，DataWorks会自动生成相应cron表达式。
     * 示例如下：
     * - 每天凌晨5点30分定时调度：`00 30 05 * * ?`。
     * - 每个小时的第15分钟定时调度：`00 15 * * * ?`。
     * - 每隔十分钟调度一次：`00 00/10 * * * ?`。
     * - 每天8点到17点，每个十分钟调度一次：`00 00-59/10 8-23 * * * ?`。
     * - 每月的1日0点20分自动调度：`00 20 00 1 * ?`。
     * - 从1月1日0点10分开始，每过3个月调度一次：`00 10 00 1 1-12/3 ?`。
     * - 每周二、周五的0点5分自动调度：`00 05 00 * * 2,5`。
     * 由于DataWorks调度系统的规则，cron表达式有以下限制：
     * - 最短调度间隔时间为5分钟。
     * - 每天最早调度时间为0点5分。
     * @example `00 00-59/5 1-23 * * ?`
     */
    "CronExpress"?: string;
    /**
     * 调度周期的类型，包括NOT_DAY（分钟、小时）和DAY（日、周、月）。
     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>时间属性>调度周期”对应。
     * @example `NOT_DAY`
     */
    "CycleType"?: string;
    /**
     * 依赖上一周期的方式。取值如下：
     * - SELF：依赖项选择本节点。
     * - CHILD：依赖项选择一级子节点。
     * - USER_DEFINE：依赖项选择其他节点。
     * - NONE：未选择依赖项，即不会依赖上一周期。
     * @example `USER_DEFINE`
     */
    "DependentType"?: string;
    /**
     * 当DependentType参数配置为USER_DEFINE时，用于设置当前文件具体依赖的节点ID。依赖多个节点时，使用英文逗号（,）分隔。
     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>调度依赖”配置为“上一周期”后，依赖项选择”其他节点“时配置的内容对应。
     * @example `5,10,15,20`
     */
    "DependentNodeIdList"?: string;
    /**
     * 文件依赖的上游文件的输出名称。依赖多个输出时，使用英文逗号（,）分隔。
     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>调度依赖“选择”同周期“时的”父节点输出名称”对应。
     * > 通过CreateDISyncTask和UpdateFile方式创建离线同步任务时此参数必须配置。
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
     * 文件的ID。您可以调用[ListFiles](~~173942~~)接口获取文件ID。
     * @example `100000001`
     */
    "FileId": number;
    /**
     * 文件的输出。
     * 该参数与[DataWorks控制台](https://workbench.data.aliyun.com/console)中，数据开发任务的“调度配置>调度依赖“选择”同周期“时的”本节点的输出名称”对应。
     * @example `dw_project.ods_user_info_d`
     */
    "OutputList"?: string;
    /**
     * 文件发布成任务后，任务执行时对应的资源组。您可以调用[ListResourceGroups](~~173913~~)获取工作空间可用的资源组列表。
     * @example `default_group`
     */
    "ResourceGroupIdentifier"?: string;
    /**
     * 文件对应任务执行时，任务使用的数据源标识符。您可以调用[ListDataSources](~~211431~~)获取可用的数据源列表。
     * @example `odps_source`
     */
    "ConnectionName"?: string;
    /**
     * 文件所有者的用户ID。
     * @example `18023848927592`
     */
    "Owner"?: string;
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
     * 发布后是否立即启动。取值如下：
     * - true：发布后立即启动。
     * - false：发布后暂不启动。
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
     * 调度配置->上一周期->是否跳过上游的空跑属性
     * @example `true`
     */
    "IgnoreParentSkipRunningProperty"?: boolean;
}
