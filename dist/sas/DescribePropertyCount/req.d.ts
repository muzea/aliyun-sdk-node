interface DescribePropertyCountRequest {
    "RegionId"?: string;
    "SourceIp"?: string;
    /**
    * 指定待查询的指纹类型。可选：
    * - **user**：账户
    * - **software**：软件
    * - **process**：进程
    * - **port**：端口
    * > 类型不填表示获取所有类型信息。
    * @example `port`
    */ "Type"?: string;
    /**
    * 指定待查询的资产UUID。
    * @example `[]`
    */ "UuidList"?: string;
}
export { DescribePropertyCountRequest };