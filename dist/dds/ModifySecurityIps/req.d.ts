interface ModifySecurityIpsRequest {
    "RegionId"?: string;
    /**
    * IP白名单分组下的IP列表，多个IP地址请以英文逗号（,）隔开，不可重复，最多1000个。支持如下两种格式：
    * - IP地址形式，例如：10.23.12.24。
    * - CIDR形式，例如：10.23.12.24/24（无类域间路由，24表示了地址中前缀的长度，范围为1~32）。
    * @example `10.23.12.24/24,10.22.22.22`
    */ "SecurityIps": string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 修改方式，取值：
    * - **Cover**：覆盖原白名单。
    * - **Append**：追加白名单。
    * - **Delete**：删除该白名单。
    * 默认取值为**Cover**。
    * @example `Append`
    */ "ModifyMode"?: string;
    /**
    * 进行修改的IP白名单所属分组名称，默认为**default**分组。
    * @example `allowserver`
    */ "SecurityIpGroupName"?: string;
    /**
    * 白名单分组属性。支持大写字母、小写字母、数字，长度最大为120个字符。
    * 默认为空字符串。
    * @example `test`
    */ "SecurityIpGroupAttribute"?: string;
}
export { ModifySecurityIpsRequest };