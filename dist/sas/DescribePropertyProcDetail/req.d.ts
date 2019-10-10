interface DescribePropertyProcDetailRequest {
    "RegionId"?: string;
    "SourceIp"?: string;
    /**
    * 服务器名称或IP。
    * @example `0.0.0.0`
    */ "Remark"?: string;
    /**
    * 指定待查询进程名称。
    * @example `8888`
    */ "Name"?: string;
    /**
    * 指定待查询运行用户信息。
    * @example `root`
    */ "User"?: string;
    /**
    * 指定待查询启动参数。
    * @example `./8888`
    */ "Cmdline"?: string;
    /**
    * 指定待查询的资产UUID。
    * @example `c4678332-ef35-4ad4-8358-681ebbc0ccab`
    */ "Uuid"?: string;
    /**
    * 指定返回结果的当前页码。
    * @example `1`
    */ "CurrentPage"?: number;
    /**
    * 指定列表每页显示数据条数。
    * @example `5`
    */ "PageSize"?: number;
}
export { DescribePropertyProcDetailRequest };