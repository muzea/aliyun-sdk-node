export interface DescribeDBInstancesRequest {
    /**
     * 资源组ID
     * @example `rg-4690g37929****`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例ID，多个实例ID之间用英文逗号（,）分隔。
     * @example `selectdb-cn-7213cjv****`
     */
    "DBInstanceIds"?: string;
    /**
     * 实例的状态，取值说明：
     * - **CREATING**：创建中。
     * - **ACTIVATION**：运行中。
     * - **RESOURCE_CHANGING**：变配中。
     * - **ORDER_PREPARING**：订单确认中。
     * - **READONLY_RESOURCE_CHANGING**：资源变配中（实例写入锁定）。
     * - **DELETING**：删除中。
     * @example `ACTIVATION`
     */
    "DBInstanceStatus"?: string;
    /**
     * 实例备注信息。
     * @example `新建实例测试`
     */
    "DBInstanceDescription"?: string;
    /**
     * 每页记录数，取值：
     * - **30**（默认值）
     * - **50**
     * - **100**
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页数。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例标签列表信息。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `testKey`
         */
        Key: string;
        /**
         * 标签值。
         * @example `testValue`
         */
        Value: string;
    }[];
}
