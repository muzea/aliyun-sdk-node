export interface DescribeSuspEventsRequest {
    /**
     * 访问源的IP地址。
     * @example `192.168.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 要查询的告警事件是否已处理。取值：
     * - **N**：待处理
     * - **Y**：已处理
     * @example `N`
     */
    "Dealed"?: string;
    /**
     * 受该告警事件影响的资产的名称。
     * @example `ecs-xxx`
     */
    "Name"?: string;
    /**
     * 要查询的告警事件处理的紧急程度，多个紧急程度之间使用半角逗号（,）分隔，紧急程度依次递减。取值：
     * - **serious**：紧急
     * - **suspicious**：可疑
     * - **remind**：提醒
     * @example `serious`
     */
    "Levels"?: string;
    /**
     * 要查询的告警事件的告警类型。取值：
     * - **进程异常行为**
     * - **网站后门**
     * - **异常登录**
     * - **异常事件**
     * - **敏感文件篡改**
     * - **恶意进程（云查杀）**
     * - **异常网络连接**
     * - **异常账号**
     * - **应用入侵事件**
     * - **云产品威胁检测**
     * - **精准防御**
     * - **应用白名单**
     * - **持久化后门**
     * - **Web应用威胁检测**
     * - **恶意脚本**
     * - **威胁情报**
     * - **恶意网络行为**
     * - **容器集群异常**
     * - **网站后门（本地查杀）**
     * - **漏洞利用**
     * - **恶意进程（本地查杀）**
     * - **可信异常**
     * - **其他**
     * @example `网站后门`
     */
    "ParentEventTypes"?: string;
    /**
     * 告警事件的子类型。多个类型之间使用半角逗号（,）隔开。
     * @example `WEBSHELL`
     */
    "EventNames"?: string;
    /**
     * 要查询的告警名称或资产的信息。
     * > 支持模糊查询。资产信息包含资产名称、公网IP、内网IP。
     * @example `192.168.XX.XX`
     */
    "Remark"?: string;
    /**
     * 要查询的告警事件状态。取值：
     * - **0**：全部
     * - **1**：待处理
     * - **2**：已忽略
     * - **4**：已确认
     * - **8**：已标记为误报
     * - **16**：处理中
     * - **32**：处理完毕
     * - **64**：已经过期
     * - **128**：已经删除
     * - **512**：自动拦截中
     * - **513**：自动拦截完毕
     * @example `1`
     */
    "Status"?: string;
    /**
     * 设置分页查询时，每页显示的告警事件的数量。默认值为**20**，表示每页显示20条告警事件。最大值为100。
     * @example `20`
     */
    "PageSize"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: string;
    /**
     * 设置请求和接收消息的语言类型。默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 告警事件的唯一标识ID。
     * > 如果查询单个告警事件的异常事件信息，需要提供告警事件的唯一标识ID，该ID可调用[DescribeSuspEvents](~~DescribeSuspEvents~~)接口获取。
     * @example `8df914418f4211fb****`
     */
    "AlarmUniqueInfo"?: string;
    /**
     * 安全告警的唯一key。
     * @example `73fc06fb175a7405697e402f52864****`
     */
    "UniqueInfo"?: string;
    /**
     * 记录告警事件的唯一标识ID。
     * @example `123`
     */
    "Id"?: number;
    /**
     * 告警事件所属数据源标识，固定为sas。
     * @example `sas`
     */
    "From"?: string;
    /**
     * 告警来源。
     * @example `aegis_suspicious_file_v2`
     */
    "Source"?: string;
    /**
     * 受告警事件影响的资产的分组ID。
     * @example `18768`
     */
    "GroupId"?: number;
    /**
     * 要查询告警的服务器的UUID，多个UUID使用半角逗号（,）分隔。
     * @example `bb5d2484-f10e-450d-8917-3e79667e****,0e7c2fcd-7100-42c7-a21a-db6e4f32****`
     */
    "Uuids"?: string;
    /**
     * 需要查询告警事件的集群ID。
     * @example `c4af4fdf38a98496a9b63c2be5dae****`
     */
    "ClusterId"?: string;
    /**
     * 容器检索项。取值：
     * - **instanceId**：实例ID
     * - **appName**：应用名
     * - **clusterId**：集群ID
     * - **regionId**：地域
     * - **nodeName**：节点名
     * - **namespace**：命名空间
     * - **clusterName**：集群名称
     * - **image**：镜像名称
     * - **imageRepoName**：镜像的仓库名称
     * - **imageRepoNamespace**：镜像的仓库命名空间
     * - **imageRepoTag**：镜像的标签
     * - **imageDigest**：镜像摘要
     * @example `instanceId`
     */
    "ContainerFieldName"?: string;
    /**
     * 容器检索项对应值。
     * @example `ccf9769c22b844ff9b8d57417683b****`
     */
    "ContainerFieldValue"?: string;
    /**
     * 容器检索目标类型。取值：
     * - **containerId**：容器ID
     * - **uuid**：服务器UUID
     * - **imageUuid**：镜像UUID
     * @example `containerId`
     */
    "TargetType"?: string;
    /**
     * ATT&CK的战术ID。
     * @example `TA0001`
     */
    "TacticId"?: string;
    /**
     * 告警事件处理结果码集合。
     */
    "OperateErrorCodeList"?: string[];
    /**
     * 处理时间开始时间戳。
     * @example `2022-07-05 13:50:38`
     */
    "OperateTimeStart"?: string;
    /**
     * 处理时间结束时间戳。
     * @example `2022-07-06 13:50:38`
     */
    "OperateTimeEnd"?: string;
    /**
     * 最新发生时间起始时间。
     * @example `2022-07-05 13:50:38`
     */
    "TimeStart"?: string;
    /**
     * 最新发生时间结束时间。
     * @example `2022-07-06 13:50:38`
     */
    "TimeEnd"?: string;
    /**
     * 自定义排序字段，默认**operateTime**，取值：
     * - **lastTime**：最新发生时间。
     * - **operateTime**：处理时间。
     * > 该字段作用于**Dealed**为Y。
     * @example `operateTime`
     */
    "SortColumn"?: string;
    /**
     * 自定义排序类型，默认**desc**，取值：
     * - **asc**：升序。
     * - **desc**：倒叙。
     * > 该字段作用于**Dealed**为Y。
     * @example `desc`
     */
    "SortType"?: string;
    /**
     * 资产类型集合。
     */
    "AssetsTypeList"?: string[];
    /**
     * 资源目录成员账号主账号ID。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `16670360956*****`
     */
    "ResourceDirectoryAccountId"?: number;
    /**
     * 是否属于严格模式告警标识。
     * - N：否
     * - Y：是
     * @example `Y`
     */
    "StrictMode"?: string;
}
