interface DescribeInstanceStatisticsRequest {
    "RegionId"?: string;
    /**
    * 指定待查询的机器列表。
    * @example `["ff675afd-703e-40dc-809b-0fad8b0ded28"]`
    */ "Uuid": string;
    /**
    * 指定数据请求来源。固定为sas。
    * @example `sas`
    */ "From": string;
    /**
    * 指定访问源IP地址。
    * @example `127.1.1.1`
    */ "SourceIp"?: string;
    /**
    * 指定返回结果语言环境。
    * - **zh**：中文
    * - **en**：英文
    * @example `zh`
    */ "Lang"?: string;
}
export { DescribeInstanceStatisticsRequest };