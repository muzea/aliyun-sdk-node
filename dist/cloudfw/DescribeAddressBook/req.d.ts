interface DescribeAddressBookRequest {
    "RegionId"?: string;
    /**
    * 访问者源IP地址。
    * @example `1.2.3.4`
    */ "SourceIp"?: string;
    /**
    * 指定请求和接收消息的语言类型。
    * - **zh**：中文
    * - **en**：英文
    * @example `zh`
    */ "Lang"?: string;
    /**
    * 指定返回结果的当前页码。默认值为1。
    * @example `1`
    */ "CurrentPage"?: string;
    /**
    * 指定列表每页显示数据条数。可设置值最大为50。
    * @example `50`
    */ "PageSize"?: string;
    /**
    * 搜索条件，指定待搜索地址簿信息。
    * @example `1.2.3.0`
    */ "Query"?: string;
    /**
    * 待查询地址簿类型, 可选值包括：
    * - **ip**：IP地址簿
    * - **domain**：域名地址簿
    * - **port**：端口地址簿
    * - **tag**：ECS标签地址簿
    * @example `ip`
    */ "GroupType"?: string;
    /**
    * 查询包含指定端口的地址簿, 仅当**GroupType**为**port**时有效。
    * @example `80`
    */ "ContainPort"?: string;
}
export { DescribeAddressBookRequest };