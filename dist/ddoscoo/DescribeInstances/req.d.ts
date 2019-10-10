interface DescribeInstancesRequest {
    /**
    * 地域ID。
    * @example `xx`
    */ "RegionId"?: string;
    /**
    * 分页大小，即每页显示多少条结果。最大值是**50**。
    * @example `10`
    */ "PageSize": string;
    /**
    * 源IP。
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * 分页页号，即从几页开始显示。最小值是**1**。
    * @example `1`
    */ "PageNo": string;
    /**
    * 资源组ID。
    * @example `xx`
    */ "ResourceGroupId"?: string;
    /**
    * 通过实例Id查询实例信息，传入要查询的实例Id数组（JSON字符串）。支持精确匹配。例如，\["ddoscoo-cn-XXXX1", "ddoscoo-cn-XXXX2"]。
    * >  若传入该参数，则无需传入**Ip**和**Remark**。
    * @example `["ddoscoo-cn-XXXXX"]`
    */ "InstanceIds"?: string;
    /**
    * 通过实例Ip查询实例信息，传入要查询的实例Ip地址。支持精确匹配查询。
    * > 若传入该参数，则无需传入**InstanceIds**和**Remark**。
    * @example `1.1.1.1`
    */ "Ip"?: string;
    /**
    * 通过实例备注查询实例信息，传入要查询的实例的备注信息。支持模糊查询。
    * > 若传入该参数，则无需传入**InstanceIds**和**Ip**。
    * @example ` testRemark`
    */ "Remark"?: string;
    "Edition"?: number;
    "Tag"?: string[];
}
export { DescribeInstancesRequest };