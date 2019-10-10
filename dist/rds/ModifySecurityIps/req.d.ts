interface ModifySecurityIpsRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 该实例的[IP白名单](~~43185~~)，多个IP地址请以英文逗号（,）隔开，不可重复，最多1000个。支持如下两种格式：
    * * IP地址形式，例如：10.23.12.24。
    * * CIDR形式，例如：10.23.12.24/24（无类域间路由，24表示了地址中前缀的长度，范围为1~32）。
    * @example `10.23.12.24`
    */ "SecurityIps": string;
    "OwnerId"?: number;
    "ClientToken"?: string;
    /**
    * 需要修改的IP白名单分组名称，默认操作“Default”分组。
    * >单个实例最多支持50个白名单分组。
    * @example `test`
    */ "DBInstanceIPArrayName"?: string;
    /**
    * 白名单分组属性，默认为空。
    * >控制台不显示带有“hidden”属性的分组，带有该标签的分组通常是用于访问DTS、DRDS服务的。
    * @example `hidden`
    */ "DBInstanceIPArrayAttribute"?: string;
    /**
    * IP地址类型。
    * @example `IPv4`
    */ "SecurityIPType"?: string;
    /**
    * 白名单的网络类型，取值：
    * * **Classic**：高安全白名单模式下的经典网络；
    * * **VPC**：高安全白名单模式下的专有网络；
    * * **MIX**：通用模式，在通用白名单模式下会添加IP到通用分组里，在高安全白名单模式下会同时添加IP到经典网络和专有网络分组里。
    * 默认值：**MIX**。
    * @example `Classic`
    */ "WhitelistNetworkType"?: string;
    /**
    * 安全组编码。
    * @example `rg-acfmyxxxxx`
    */ "SecurityGroupId"?: string;
    /**
    * 修改方式，取值：
    * * **Cover**：覆盖原IP白名单；
    * * **Append**：追加IP；
    * * **Delete**：删除IP。
    * 默认值：**Cover**。
    * @example `Cover`
    */ "ModifyMode"?: string;
}
export { ModifySecurityIpsRequest };