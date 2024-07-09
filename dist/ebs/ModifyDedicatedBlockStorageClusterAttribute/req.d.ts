export interface ModifyDedicatedBlockStorageClusterAttributeRequest {
    /**
     * 专属块存储集群所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-heyuan`
     */
    "RegionId": string;
    /**
     * 专属块存储集群ID。
     * @example `dbsc-cn-od43bf****`
     */
    "DbscId": string;
    /**
     * 修改后的专属块存储集群的名称。
     * @example `my-test-dbsc`
     */
    "DbscName": string;
    /**
     * 描述信息。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。
     * ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
