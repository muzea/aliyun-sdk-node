export interface ExportVulRequest {
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 要导出的漏洞列表的漏洞类型。取值：
     * - **cve**：Linux软件漏洞
     * - **sys**：Windows系统漏洞
     * - **cms**：Web-CMS漏洞
     * - **app**：应用漏洞
     * - **emg**：应急漏洞
     * @example `app`
     */
    "Type": string;
    /**
     * 要查询漏洞的服务器的UUID，多个UUID使用半角逗号（,）分隔。
     * @example `1587bedb-fdb4-48c4-9330-****`
     */
    "Uuids"?: string;
    /**
     * 漏洞名称。
     * @example `RHSA-2019:3197-Important: sudo security update`
     */
    "AliasName"?: string;
    /**
     * 要查询的漏洞修复优先级。多个优先级使用半角逗号（,）分隔。取值包括：
     * - **asap**：高
     * - **later**：中
     * - **nntf**：低
     * @example `asap`
     */
    "Necessity"?: string;
    /**
     * 要查询的漏洞是否已修复。取值：
     * - **y**：已修复
     * - **n**：未修复
     * @example `n`
     */
    "Dealed"?: string;
    /**
     * 要查询的漏洞所在服务器的资产分组ID。
     * > 您可以调用[DescribeAllGroups](~~DescribeAllGroups~~)接口获取该参数。
     * @example `8834224`
     */
    "GroupId"?: string;
    /**
     * 按照标签过滤。取值：
     * <props="china">
     * - 需要重启
     * - 远程利用
     * - 存在EXP
     * - 可被利用
     * - 本地提权
     * - 代码执行
     * </props>
     * <props="intl">
     * - **Restart required**
     * - **Remote utilization**
     * - **EXP exists**
     * - **Available**
     * - **Elevation of Privilege**
     * - **Code Execution**
     * </props>
     * @example `Restart required`
     */
    "SearchTags"?: string;
    /**
     * 查询应用漏洞时的附加漏洞类型。查询应用漏洞（即Type设置为app）时需要设置该参数。该参数固定取值为**sca**。
     * > 如果该参数设置为**sca**，可查询应用漏洞（**app**类型）及软件成分分析（**sca**类型）漏洞，如果不设置该参数，只查询应用漏洞。
     * @example `sca`
     */
    "AttachTypes"?: string;
    /**
     * 要查询漏洞的VPC实例ID。多个ID使用半角逗号（,）分隔。
     * > 您可以调用[DescribeVpcList](~~DescribeVpcList~~)接口获取该参数。
     * @example `ins-133****,ins-5414****`
     */
    "VpcInstanceIds"?: string;
    /**
     * CVE编号。
     * @example `CVE-2022-44702`
     */
    "CveId"?: string;
    /**
     * 要查询漏洞影响的进程路径。
     * @example `/etc/test`
     */
    "Path"?: string;
    /**
     * 要查询漏洞影响的容器名称。
     * @example `xxljob-7b87597b99-mcskr`
     */
    "ContainerName"?: string;
    /**
     * 要查询漏洞影响的镜像名称。
     * @example `container-***:****`
     */
    "ImageName"?: string;
    /**
     * 首次扫描时间起始时间。
     * > 时间戳，单位为毫秒。
     * @example `1696128144000`
     */
    "CreateTsStart"?: number;
    /**
     * 首次扫描时间结束时间。
     * > 时间戳，单位为毫秒。
     * @example `1696186800000`
     */
    "CreateTsEnd"?: number;
}
