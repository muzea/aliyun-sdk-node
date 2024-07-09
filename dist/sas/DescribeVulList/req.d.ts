export interface DescribeVulListRequest {
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 漏洞ID列表，多个ID之间使用半角逗号（,）分隔，最多50个。
     * @example `282,281,283`
     */
    "Ids"?: string;
    /**
     * 要查询漏洞的资产信息，可以设置为资产名称、公网IP或私网IP。
     * @example `1.2.XX.XX`
     */
    "Remark"?: string;
    /**
     * 要查询的资产分组ID。
     * > 您可以调用[DescribeAllGroups](~~DescribeAllGroups~~)接口获取该参数。
     * @example `9207613`
     */
    "GroupId"?: string;
    /**
     * 要查询的漏洞类型。取值：
     * -  **cve**：Linux软件漏洞
     * -  **sys**：Windows系统漏洞
     * -  **cms**：Web-CMS漏洞
     * -  **app**：应用漏洞（web扫描器）
     * -  **emg**：应急漏洞
     * - **sca**：应用漏洞（软件成分分析）
     * @example `cve`
     */
    "Type": string;
    /**
     * 要查询漏洞的服务器的UUID，多个UUID之间使用半角逗号（,）分隔。
     * @example `1587bedb-fdb4-48c4-9330-****`
     */
    "Uuids"?: string;
    /**
     * 漏洞别名。
     * @example `oval:com.redhat.rhsa:def:20172836`
     */
    "Name"?: string;
    /**
     * 要查询的漏洞名称。
     * @example `RHSA-2019:0230-Important: polkit security update`
     */
    "AliasName"?: string;
    /**
     * 漏洞状态，多个用英文逗号隔开。取值：
     * - **1**：未修复
     * - **2**：修复失败
     * - **3**：回滚失败
     * - **4**：修复中
     * - **5**：回滚中
     * - **6**：验证中
     * - **7**：修复成功
     * - **8**：修复成功待重启
     * - **9**：回滚成功
     * - **10**：已忽略
     * - **11**：回滚成功待重启
     * - **12**：漏洞不存在
     * - **20**：已失效
     * @example `1,2,3`
     */
    "StatusList"?: string;
    /**
     * 要查询的漏洞修复必要性等级。多个等级之间使用半角逗号（,）分隔。取值：
     * - **asap**：高
     * - **later**：中
     * - **nntf**：低
     * @example `asap,later,nntf`
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
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 设置分页查询时，每页显示的漏洞信息的数量。默认值为**10**，表示每页显示10条漏洞信息。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 查询应用漏洞时的附加漏洞类型。该参数固定取值为**sca**。查询应用漏洞（即**Type**设置为**app**）时需要设置该参数。
     * >如果该参数设置为**sca**，可查询应用漏洞（app类型）及软件成分分析（sca类型）漏洞，如果不设置该参数，只查询应用漏洞。
     * @example `sca`
     */
    "AttachTypes"?: string;
    /**
     * 要查询漏洞的VPC实例ID。多个之间ID使用半角逗号（,）分隔。
     * @example `ins-133****,ins-5414****`
     */
    "VpcInstanceIds"?: string;
    /**
     * 资源目录成员账号主账号ID。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `1232428423234****`
     */
    "ResourceDirectoryAccountId"?: number;
    /**
     * 是否使用NextToken方式拉取漏洞列表数据。如果使用此参数TotalCount不再返回。取值：
     * - **true**：使用NextToken方式
     * - **false**：不使用NextToken方式
     * @example `false`
     */
    "UseNextToken"?: boolean;
    /**
     * 使用NextToken方式下返回的NextToken值。第一次拉取传空。
     * @example `E17B501887A2D3AA5E8360A6EFA3B***`
     */
    "NextToken"?: string;
}
