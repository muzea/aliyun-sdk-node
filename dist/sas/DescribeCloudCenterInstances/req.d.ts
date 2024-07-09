export interface DescribeCloudCenterInstancesRequest {
    /**
     * 要查询的实例所在地域的ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 设置搜索资产的条件。该参数JSON格式，输入参数时注意大小写。
     * > 支持使用资产的实例ID、实例名称、所属VPC ID、地域、公网IP地址等条件搜索资产。您可以调用[DescribeCriteria](~~DescribeCriteria~~)接口查询支持的搜索条件。
     * @example `[{"name":"riskStatus","value":"YES"},{"name":"internetIp","value":"1.2.XX.XX"}]`
     */
    "Criteria"?: string;
    /**
     * 要查询的资产的类型。取值：
     * - **ecs**：服务器。
     * - **cloud_product**：云产品。
     * @example `ecs`
     */
    "MachineTypes"?: string;
    /**
     * 设置多个搜索条件间生效的逻辑关系。默认**OR**，取值：
     * - **OR**：表示多个搜索条件之间是**或**的关系。
     * - **AND**：表示多个搜索条件之间是**与**的关系。
     * @example `OR`
     */
    "LogicalExp"?: string;
    /**
     * 设置分页查询时，每页显示的资产的数量。默认值为**20**，表示每页显示20条资产信息。
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 设置资产重要性。取值：
     * - **2**：重要资产
     * - **1**：一般资产
     * - **0**：测试资产
     * @example `2`
     */
    "Importance"?: number;
    /**
     * 默认分组**未分组**是否要做国际化处理。默认**false**，取值：
     * - **true**：不做国际化处理。即返回参数GroupTrace的取值为云安全中心的默认分组**未分组**时，**未分组**仍然显示为**未分组**。
     * - **false**：需要国际化处理。即返回参数GroupTrace的取值为云安全中心的默认分组**未分组**时，**未分组**显示为**default**。
     * @example `false`
     */
    "NoGroupTrace"?: boolean;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 是否使用NextToken方式拉取资产列表数据。如果使用此参数TotalCount不再返回。取值：
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
    /**
     * 资源目录成员账号主账号ID。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `1232428423234****`
     */
    "ResourceDirectoryAccountId"?: number;
}
