interface DescribePropertySoftwareDetailRequest {
    "RegionId"?: string;
    "SourceIp"?: string;
    /**
    * 服务器名称或IP。
    * @example `0.0.0.0`
    */ "Remark"?: string;
    /**
    * 指定待查询的软件名称。
    * @example `xxxx`
    */ "Name"?: string;
    /**
    * 指定待查询的软件安装路径。
    * @example `/etc/test`
    */ "Path"?: string;
    /**
    * 指定待查询的软件版本信息。
    * @example `11`
    */ "SoftwareVersion"?: string;
    /**
    * 指定待查询的资产UUID。
    * @example `50d213b4-3a35-427a-b8a5-04b0c7e1f4d2"`
    */ "Uuid"?: string;
    /**
    * 指定返回结果的当前页码。
    * @example `1`
    */ "CurrentPage"?: number;
    /**
    *  指定列表每页显示数据条数 。
    * @example `5`
    */ "PageSize"?: number;
}
export { DescribePropertySoftwareDetailRequest };