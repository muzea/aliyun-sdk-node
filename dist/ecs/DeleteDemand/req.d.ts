export interface DeleteDemandRequest {
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    "ClientToken"?: string;
    /**
     * 报备实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 报备ID。
     * @example `ed-bp11n21kq00sl71p****`
     */
    "DemandId": string;
    /**
     * 删除报备单原因，请详细填写。
     * @example `test-reason`
     */
    "Reason"?: string;
}
