interface DescribeDNSMapRequest {
    "RegionId"?: string;
    /**
    * 任务ID。获取指定任务ID数据。
    * @example `12345`
    */ "TaskId": number;
    "SourceIp"?: string;
    /**
    * 资产名称。查询指定资产下的检测数据。
    * @example `foo.com`
    */ "Asset"?: string;
    /**
    * 指定返回结果的当前页码。默认值为1。
    * @example `1`
    */ "CurrentPage"?: number;
    /**
    * 指定列表每页显示数据条数。默认值为10，且可设置值最大为10。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeDNSMapRequest };