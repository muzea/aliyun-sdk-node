interface DescribePropertyUserDetailRequest {
    "RegionId"?: string;
    "SourceIp"?: string;
    /**
    * 服务器名称或IP。
    * @example `0.0.0.0`
    */ "Remark"?: string;
    /**
    * 指定待查询的账户名称。
    * @example `test`
    */ "User"?: string;
    /**
    * 是否ROOT权限。
    * - **0**：否
    * - **1**：是
    * @example `0`
    */ "IsRoot"?: string;
    /**
    * 指定待查询的资产UUID。
    * @example `50d213b4-3a35-427a-b8a5-04b0c7e1f4d2`
    */ "Uuid"?: string;
    /**
    * 指定返回结果的当前页码。
    * @example `1`
    */ "CurrentPage"?: number;
    /**
    * 指定列表每页显示数据条数 。
    * @example `2`
    */ "PageSize"?: number;
}
export { DescribePropertyUserDetailRequest };