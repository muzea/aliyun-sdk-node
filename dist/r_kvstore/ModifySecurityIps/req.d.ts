export interface ModifySecurityIpsRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * IP白名单分组下的IP列表，最多1000个。IP之间以逗号隔开，格式如下：0.0.0.0/0,10.23.12.24，或者10.23.12.24/24（CIDR模式，无类域间路由，/24表示地址中前缀的长度，范围1-32）。
     * @example `100.64.***.0/24,10.101.11.***`
     */
    "SecurityIps": string;
    /**
     * IP白名单分组的名称。
     * <warning>不可修改系统生成白名单分组。如果不传此字段，将默认修改 default 分组的白名单</warning>
     * @example `default`
     */
    "SecurityIpGroupName"?: string;
    /**
     * 默认为空。用于区分不同的属性值，控制台将不显示该值为**hidden**的白名单分组。
     * @example `hidden`
     */
    "SecurityIpGroupAttribute"?: string;
    /**
     * 修改方式，取值：
     * * **Cover**（默认）：覆盖原白名单。
     * * **Append**：追加白名单。
     * * **Delete**：删除该白名单。
     * @example `Append`
     */
    "ModifyMode"?: string;
}
