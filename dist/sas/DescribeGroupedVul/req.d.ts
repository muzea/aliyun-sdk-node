export interface DescribeGroupedVulRequest {
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 要查询的漏洞类型。默认cve。取值：
     * - **cve**：Linux漏洞
     * - **sys**：Windows漏洞
     * - **cms**：WebCMS漏洞
     * - **app**：应用漏洞（网络扫描）
     * - **sca**：应用漏洞（软件成分分析）
     * @example `cve`
     */
    "Type"?: string;
    /**
     * 要查询的服务器的UUID。多个UUID使用半角逗号（,）分隔。
     * @example `d42f938c-d962-48a0-90f9-05e4ea****`
     */
    "Uuids"?: string;
    /**
     * 要查询的漏洞的别名。
     * @example `RHSA-2019:0230-Important: polkit security update`
     */
    "AliasName"?: string;
    /**
     * 要查询的漏洞修复的优先级。多个优先级使用半角逗号（,）分隔。取值：
     * - **asap**：高
     * - **later**：中
     * - **nntf**：低
     * @example `asap,later,nntf`
     */
    "Necessity"?: string;
    /**
     * 漏洞是否处理。取值：
     * - **y**：已处理
     * - **n**：未处理
     * @example `n`
     */
    "Dealed"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 设置分页查询时，每页显示的漏洞信息的数量。默认值为10，表示每页显示10条漏洞信息。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 资产分组的ID。
     * @example `235454`
     */
    "GroupId"?: string;
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
     * @example `appName`
     */
    "ContainerFieldName"?: string;
    /**
     * 容器查询类型。取值：
     * - **containerId**：容器ID
     * - **uuid**：资产ID
     * @example `containerId`
     */
    "TargetType"?: string;
    /**
     * 按照标签过滤。取值：
     * <props="china">
     * - **需要重启**
     * - **远程利用**
     * - **存在EXP**
     * - **可被利用**
     * - **本地提权**
     * - **代码执行**
     * </props>
     * <props="intl">
     * - **Restart required**
     * - **Remote utilization**
     * -  **EXP exists**
     * -  **Available**
     * - **Elevation of Privilege**
     * - **Code Execution**
     * </props>
     * @example `Code Execution`
     */
    "SearchTags"?: string;
    /**
     * 漏洞类型。该查询条件仅对查询应用漏洞有效。多个使用半角逗号（,）分隔。取值：
     * - **sca**：软件成分分析漏洞
     * - **app**：应用漏洞
     * @example `sca`
     */
    "AttachTypes"?: string;
    /**
     * 漏洞所在资产类型。多个类型使用半角逗号（,）分隔。取值：
     * - **ECS**：主机资产
     * - **CONTAINER**：容器资产
     * @example `ECS,CONTAINER`
     */
    "AssetType"?: string;
    /**
     * 资源目录成员账号主账号ID。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `127608589417****`
     */
    "ResourceDirectoryAccountId"?: number;
}
