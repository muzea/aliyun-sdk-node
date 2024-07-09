export interface DescribeGroupedInstancesRequest {
    /**
     * 设置请求和接收消息的语言类型，默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 要查询的资产的类型。固定取值：**ecs**，表示云服务器。
     * @example `ecs`
     */
    "MachineTypes"?: string;
    /**
     * 查询资产的过滤条件。取值：
     * - **groupId**：表示按照资产的分组查询。
     * - **regionId**：表示按照资产所在的地域查询。
     * - **vpcInstanceId**：表示按照资产所属的专有网络VPC查询。
     * @example `groupId`
     */
    "GroupField": string;
    /**
     * 要查询的资产分组的名称，支持模糊搜索。
     * @example `test-01`
     */
    "FieldValue"?: string;
    /**
     * 设置是否启用分页查询。默认值为**true**。取值：
     * - **true**：启用分页查询。
     * - **false**：不启用分页查询。
     * @example `true`
     */
    "NoPage"?: boolean;
    /**
     * 设置分页查询时，每页显示的资产信息的数量。  默认值为**20**，表示每页显示20条资产信息。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 服务器厂商。取值：
     * - **0**：阿里云资产
     * - **1**：云外资产
     * - **2**：IDC资产
     * - **3**、**4**、**5**、**7**：其它云资产
     * - **8**：轻量级资产
     * @example `0`
     */
    "Vendor"?: number;
    /**
     * 服务器厂商。多个厂商使用半角逗号（,）分隔。取值：
     * - **0**：阿里云资产
     * - **1**：云外资产
     * - **2**：IDC资产
     * - **3**、**4**、**5**、**7**：其它云资产
     * - **8**：轻量级资产
     * @example `0,8`
     */
    "Vendors"?: string;
    /**
     * 查询资产的售卖条件过滤。取值：
     * - **sas\_gte\_advanced**：大于等于高级版
     * - **sas\_gte\_enterprise**：大于等于企业版
     * - **sas\_gt\_basic**：付费版
     * - **sas\_eq\_advanced**：等于高级版
     * - **sas\_gt\_anti\_virus**：大于防病毒版
     * @example `sas_gt_basic`
     */
    "SaleVersionCheckCode"?: string;
}
