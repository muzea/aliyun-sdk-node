interface SetAuditSecurityIpRequest {
    "RegionId"?: string;
    /**
    * 审核安全IP列表，每个分组最多支持100个，以逗号隔开，格式如下：
    * - 精确IP: 10.23.12.24
    * - CIDR模式: 10.23.12.24/24（无类域间路由，/24表示了地址中前缀的长度，范围`[1,32]`）
    * @example `10.23.12.24`
    */ "Ips": string;
    /**
    * 审核安全组名称，默认为**Default**。每个用户最多支持10个安全分组。
    * @example `Default`
    */ "SecurityGroupName"?: string;
    /**
    * 操作方式，取值范围：
    * - **Append**：默认值，追加IP白名单。
    * - **Cover**：覆盖原IP白名单。
    * - **Delete**：删除IP白名单。
    * @example `Cover`
    */ "OperateMode"?: string;
}
export { SetAuditSecurityIpRequest };