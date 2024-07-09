export interface DescribeMigrationJobDetailRequest {
    /**
     * 数据迁移实例所在地域的ID，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 每页记录数，取值： **30**、**50**、**100**，默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于**0**且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 数据迁移实例ID，可以通过调用**DescribeMigrationJobs**接口查询。
     * @example `dtsta7w132u12h****`
     */
    "MigrationJobId": string;
    /**
     * 是否查询结构迁移详情，取值：
     * - **true**：是。
     * - **false**：否。
     * > 默认值为**false**。
     * @example `true`
     */
    "MigrationMode.StructureInitialization"?: boolean;
    /**
     * 是否查询全量数据迁移详情，取值：
     * - **true**：是。
     * - **false**：否。
     * > 默认值为**false**。
     * @example `true`
     */
    "MigrationMode.DataInitialization"?: boolean;
    /**
     * 是否查询增量数据迁移详情，取值：
     * - **true**：是。
     * - **false**：否。
     * > 默认值为**false**。
     * @example `true`
     */
    "MigrationMode.DataSynchronization"?: boolean;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe63****`
     */
    "ClientToken"?: string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
    "ResourceGroupId"?: string;
}
