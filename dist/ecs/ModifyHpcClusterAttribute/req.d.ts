interface ModifyHpcClusterAttributeRequest {
    /**
    * 地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * HPC 集群 ID。
    * @example `hpc-hpcclusterid1`
    */ "HpcClusterId": string;
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
    * HPC 集群描述。长度为 2~256 个英文或中文字符，不能以 http:// 和 https:// 开头。默认值：空。
    * @example `FinanceDept`
    */ "Description"?: string;
    /**
    * HPC 集群名称。长度为 2~128 个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。默认值：空。
    * @example `FinanceJoshua`
    */ "Name"?: string;
}
export { ModifyHpcClusterAttributeRequest };