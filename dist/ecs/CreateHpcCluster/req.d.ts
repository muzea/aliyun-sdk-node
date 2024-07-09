export interface CreateHpcClusterRequest {
    /**
     * HPC集群所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * HPC集群描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
     * 默认值：空
     * @example `testHPCDescription`
     */
    "Description"?: string;
    /**
     * HPC集群名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、英文句号（.）、下划线（_）或者短划线（-）。
     * @example `hpc-Cluster-01`
     */
    "Name": string;
}
