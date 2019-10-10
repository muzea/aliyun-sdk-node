interface DescribeParameterTemplatesRequest {
    "RegionId"?: string;
    /**
    * 数据库版本号，取值：**3.2**、**3.4**、**4.0**。
    * @example `4.0`
    */ "EngineVersion": string;
    "OwnerId"?: number;
    /**
    * 数据库引擎，取值：**mongodb**。
    * @example `mongodb`
    */ "Engine": string;
}
export { DescribeParameterTemplatesRequest };