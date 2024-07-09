export interface DescribeGroupedContainerInstancesRequest {
    /**
     * 设置搜索资产的条件。该参数为JSON格式，多个条件之间使用半角逗号（,）分隔。例如：`[{"name":"riskStatus","value":"YES"},{"name":"riskLevel","value":"2"}]`。
     * > 支持使用实例ID、实例名称、所属VPC ID、地域、公网IP地址等条件搜索资产。您可以调用[DescribeCriteria](~~DescribeCriteria~~)查询支持的搜索条件。
     * @example `[{"name":"riskStatus","value":"YES"},{"name":"riskLevel","value":"2"}]`
     */
    "Criteria"?: string;
    /**
     * 设置多个搜索条件间生效的逻辑关系。取值：
     * - **OR**：表示多个条件间为**或**的关系。
     * - **AND**：表示多个条件间为**与**的关系。
     * @example `OR`
     */
    "LogicalExp"?: string;
    /**
     * 要查询的分组类型。取值：
     * - **pod**：容器组。
     * - **appName**：应用名称。
     * - **namespace**：命名空间。
     * - **clusterId**：集群ID。
     * - **image**：镜像。
     * @example `pod`
     */
    "GroupField": string;
    /**
     * 设置不同分组类型的搜索条件。根据GroupField选择的类型您需要设置以下搜索条件：
     * - **GroupField**选择为**pod**：指定要查询的容器组名称。
     * - **GroupField**选择为**appName**：指定要查询的应用名称。
     * - **GroupField**选择为**namespace**：指定要查询的命名空间。
     * - **GroupField**选择为**clusterId**：指定要查询的集群ID。
     * - **GroupField**选择为**image**：指定要查询的镜像名称。
     * > 以上搜索条件均支持模糊搜索。
     * @example `cas-adad-qeqwe`
     */
    "FieldValue"?: string;
    /**
     * 设置分页查询时，每页显示的容器资产的数量。默认值为**20**，表示每页显示20条容器资产信息。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
}
