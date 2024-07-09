export interface DescribeVirtualNodesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 虚拟节点名称。
     * @example `testNode`
     */
    "VirtualNodeName"?: string;
    /**
     * 虚拟节点ID序列。最多20个，字符串需按照JSON格式传入。
     * @example `["vnd-2ze960zkdqrldeaw****","vnd-3ebzcviqbwt25dsz****"]`
     */
    "VirtualNodeIds"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多详情，请参阅[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 虚拟节点状态。取值范围：
     * - Pending
     * - Ready
     * - Failed
     * @example `Ready`
     */
    "Status"?: string;
    /**
     * 资源组ID。
     * @example `rg-uf66jeqopgqa9hdn****`
     */
    "ResourceGroupId"?: string;
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * 首次查询时无需设置该参数，后续查询的Token从返回结果中获取。
     * @example `d78f2dd8-5979-42fe-****-b16db43be5bc`
     */
    "NextToken"?: string;
    /**
     * 限制本次查询返回的资源数量。默认返回20个，最大不能超过20个。
     * > 返回结果可能小于指定的数量，但不会多于指定的数量。
     * @example `20`
     */
    "Limit"?: number;
    /**
     * 虚拟节点绑定的标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `name`
         */
        Key: string;
        /**
         * 标签值。
         * @example `test`
         */
        Value: string;
    }[];
}
