export interface SetAuditSecurityIpRequest {
    /**
     * 审核安全组名称。默认值为：**Default**。最多支持10个安全分组。
     * @example `Default`
     */
    "SecurityGroupName"?: string;
    /**
     * 审核安全IP列表。每个分组最多支持100个，多个IP使用英文逗号（,）隔开，格式如下：
     * - 精确IP：192.168.0.1
     * - CIDR模式：192.168.0.1/24（无类域间路由，/24表示了地址中前缀的长度，范围：`[1,32]`）
     * @example `192.168.0.1`
     */
    "Ips": string;
    /**
     * 操作方式，取值范围：
     * - **Append**：默认值，追加IP白名单。
     * - **Cover**：覆盖原IP白名单。
     * - **Delete**：删除IP白名单。
     * > 当输入的参数取值不在上述取值范围内时，会使用默认值调用(即Append)。
     * @example `Cover`
     */
    "OperateMode"?: string;
}
