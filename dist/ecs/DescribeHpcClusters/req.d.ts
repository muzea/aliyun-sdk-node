interface DescribeHpcClustersRequest {
    /**
    * 地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
    /**
    * HPC 集群 ID。
    * 取值可以由多个 HPC 集群 ID 组成一个 JSON 数组，最多支持 100 个 ID，ID 之间用半角逗号（,）隔开。
    * @example `["hpc-xxxxxxxxx", "hpc-yyyyyyyyy", … "hpc-zzzzzzzzz"]`
    */ "HpcClusterIds"?: string;
    /**
    * HPC 集群列表的页码。
    * 起始值：1
    * 默认值：1
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数。
    * 最大值：100
    * 默认值：10
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeHpcClustersRequest };