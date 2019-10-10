interface DescribeLayer4RulesRequest {
    /**
    * @example `cn`
    */ "RegionId"?: string;
    /**
    * 开始索引位置，即从第几个结果开始返回。
    * > 如果不传入该参数，则从第0个结果开始返回。
    * @example `0`
    */ "Offset": number;
    /**
    * 分页大小，即每页显示多少个结果。最大值**50**。
    * @example `50`
    */ "PageSize": string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * 要查询的实例ID。
    * @example `ddoscoo-cn-XXXXX`
    */ "InstanceId": string;
    /**
    * 转发协议，取值：**TCP**。
    * @example `tcp`
    */ "ForwardProtocol"?: string;
    /**
    * 前端端口。
    * @example `233`
    */ "FrontendPort"?: number;
}
export { DescribeLayer4RulesRequest };