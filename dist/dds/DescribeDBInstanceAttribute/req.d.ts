export interface DescribeDBInstanceAttributeRequest {
    /**
     * 数据库引擎，固定取值：**MongoDB**。
     * @example `MongoDB`
     */
    "Engine"?: string;
    /**
     * 实例ID。
     * @example `dds-bp11483712c1****`
     */
    "DBInstanceId": string;
    /**
     * 资源组ID。资源组详情请参见[查看资源组基本信息](~~151181~~)。
     * >目前仅中国站支持配置该参数。
     * @example `rg-acfmyiu4ekp****`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例是否已删除，取值说明：
     * - **false**：实例正常运行，查询运行中实例信息。
     * - **true**：实例已删除，查询被删除实例的信息。
     * @example `false`
     */
    "IsDelete"?: boolean;
}
