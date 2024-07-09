export interface ExportSuspEventsRequest {
    /**
     * 请求源IP。无需填写，系统自动获取。
     * @example `127.0.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 要查询的告警事件是否已处理。取值：
     * - **N**：待处理
     * - **Y**：已处理
     * @example `Y`
     */
    "Dealed"?: string;
    /**
     * 异常事件发生时间的开始时间。
     * @example `2022-10-01 00:00:00`
     */
    "TimeStart"?: string;
    /**
     * 异常事件结束时间。
     * @example `2022-12-05 00:00:00`
     */
    "TimeEnd"?: string;
    /**
     * 异常事件的完整名称。
     * @example `WEBSHELL`
     */
    "Name"?: string;
    /**
     * 要查询的告警事件处理的紧急程度，多个紧急程度之间使用半角逗号（,）分隔，紧急程度依次递减。取值：
     * - **serious**：紧急
     * - **suspicious**：可疑
     * - **remind**：提醒
     * @example `serious,suspicious,remind`
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
     * @example `WEBSHELL`
     */
    "ParentEventTypes"?: string;
    /**
     * 备注信息。
     * @example `remark`
     */
    "Remark"?: string;
    /**
     * 异常事件的处理状态。取值包括：
     * - **0**： 全部。
     * - **1**： 待处理。
     * - **2**： 已忽略。
     * - **4**： 已确认。
     * - **8**： 已标记误报。
     * - **16**： 处理中。
     * - **32**： 处理完毕。
     * - **64**： 已经过期。
     * - **128**： 已经删除。
     * @example `0`
     */
    "Status"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 异常事件所属数据源标识，固定为sas。
     * @example `sas`
     */
    "From"?: string;
    /**
     * 指定要查询的集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
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
     * @example `clusterId`
     */
    "ContainerFieldName"?: string;
    /**
     * 容器检索项的条件。
     * @example `c819391d2d520485fa3e81e2dc2ea****`
     */
    "ContainerFieldValue"?: string;
    /**
     * 目标开关的配置的操作维度。取值：
     * - **uuid**：资产UUID
     * - **image_repo**：镜像仓ID
     * - **Cluster**：集群ID
     * @example `uuid`
     */
    "TargetType"?: string;
    /**
     * 分页查询时，显示每页数据的最大条数。默认值为**20**。
     * @example `20`
     */
    "PageSize"?: string;
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: string;
    /**
     * 资产类型集合。
     */
    "AssetsTypeList"?: string[];
    /**
     * 关联实例的唯一标识。
     * @example `18b7336e-d469-473b-af83-8e5420f9****`
     */
    "Uuid"?: string;
    /**
     * 安全告警的唯一key。
     * @example `1fbe8d16727f61d1478a674d6fa0****`
     */
    "UniqueInfo"?: string;
    /**
     * 记录告警事件的唯一标识ID。
     * @example `17821`
     */
    "Id"?: number;
    /**
     * 告警事件处理结果码集合。
     */
    "OperateErrorCodeList"?: string[];
    /**
     * 资产分组的ID。
     * @example `9454789`
     */
    "GroupId"?: number;
}
