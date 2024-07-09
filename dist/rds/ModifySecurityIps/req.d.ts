export interface ModifySecurityIpsRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `pgm-bp18n0c8zt45****`
     */
    "DBInstanceId": string;
    /**
     * 该实例的IP白名单，多个IP地址请以英文逗号（,）隔开，不可重复。支持如下两种格式：
     * * IP地址形式，例如：10.23.XX.XX。
     * * CIDR形式，例如：10.23.XX.XX/24（无类域间路由，24表示了地址中前缀的长度，范围为1~32）。
     * >每个实例最多添加1000个IP或IP段，即所有IP白名单分组内的IP或IP段总和不能超过1000。当IP较多时，建议合并为IP段填入，例如10.23.XX.XX/24。
     * @example `10.23.XX.XX`
     */
    "SecurityIps": string;
    /**
     * 需要修改的IP白名单分组名称，默认操作**Default**分组。
     * >单个实例最多支持200个白名单分组。
     * @example `test`
     */
    "DBInstanceIPArrayName"?: string;
    /**
     * 白名单分组属性，默认为空。
     * >控制台不显示带有hidden属性的分组，带有该标签的分组通常是用于访问DTS等服务的。
     * @example `hidden`
     */
    "DBInstanceIPArrayAttribute"?: string;
    /**
     * IP地址类型。
     * 暂不支持IPv6，取值固定为IPv4。
     * @example `IPv4`
     */
    "SecurityIPType"?: string;
    /**
     * 白名单的网络类型，取值：
     * * **Classic**：高安全白名单模式下的经典网络
     * * **VPC**：高安全白名单模式下的专有网络
     * * **MIX**：通用模式
     * 默认值：**MIX**。
     * > * 在通用白名单模式下会添加IP到通用分组里，在高安全白名单模式下会同时添加IP到经典网络和专有网络分组里。
     * > * RDS PostgreSQL云盘版实例固定配置为通用模式（MIX），如果配置为其他网络类型，则会自动转换为通用模式。
     * @example `MIX`
     */
    "WhitelistNetworkType"?: string;
    /**
     * 修改方式，取值：
     * * **Cover**：使用**SecurityIps**参数的值覆盖原IP白名单。
     * * **Append**：在原IP白名单中增加**SecurityIps**参数中输入的IP地址。
     * * **Delete**：在原IP白名单中删除**SecurityIps**参数中输入的IP地址。至少需要保留一个IP地址。
     * 默认值：**Cover**。
     * @example `Cover`
     */
    "ModifyMode"?: string;
    /**
     * 表示白名单同步到只读实例清单。
     * - 该参数仅适用于RDS PostgreSQL实例。
     * - 如果当前实例包含只读实例，可以通过此参数配置白名单同步，将主实例的白名单同步至指定的只读实例。当有多个只读实例时，用逗号（,）分隔。
     * - 如果当前实例没有只读实例，此参数为空。
     * @example `pgr-bp17yuz4dn3d****,pgr-bp1vn2ph54u1****`
     */
    "FreshWhiteListReadins"?: string;
}
