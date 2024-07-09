export interface QueryDedicatedBlockStorageClusterInventoryDataRequest {
    /**
     * 专属块存储集群Id。
     * @example `dbsc-xxx`
     */
    "DbscId": string;
    /**
     * 数据返回点的间隔时间(秒)。
     * @example `60`
     */
    "Period": number;
    /**
     * 查询开始秒级时间戳。
     * @example `1606303800`
     */
    "StartTime": number;
    /**
     * 查询结束秒级时间戳。
     * @example `1606403800`
     */
    "EndTime": number;
    /**
     * 专属块存储集群所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-shenzhen`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
