export interface ModifySecurityIpsRequest {
    /**
     * 该参数已废弃，无需传入该参数。
     * @example `null`
     */
    "ResourceGroupId"?: string;
    /**
     * IP白名单修改模式，取值如下：
     * - **0**（默认）：在目标IP白名单分组中覆盖原有IP地址。
     * - **1**：在目标IP白名单分组中添加IP地址。
     * - **2**：在目标IP白名单分组中删除IP地址。
     * @example `0`
     */
    "ModifyMode"?: string;
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL版实例的ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * IP白名单分组下的IP列表，最多1000个，以逗号隔开，格式如下：
     * - 10.23.12.24（IP）
     * - 10.23.12.24/24（CIDR模式，无类域间路由，`/24`表示地址中前缀的长度，范围为`[1,32]`）
     * @example `10.10.**.**`
     */
    "SecurityIPList": string;
    /**
     * IP白名单分组的名称，如果不传默认操作**default**分组。
     * > 1个实例最多支持50个白名单分组。
     * @example `default`
     */
    "DBInstanceIPArrayName"?: string;
    /**
     * 默认为空。用于区分不同的属性值，控制台不显示带有`hidden`属性的分组。
     * @example `hidden`
     */
    "DBInstanceIPArrayAttribute"?: string;
}
