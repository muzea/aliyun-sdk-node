export interface ListNetworkAccessEndpointsRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。首次查询为空。
     * @example `NTxxxxxexample`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页行数。最大值为100。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 网络端点的类型，取值可选范围：
     * - shared：共享网络端点；
     * - private：专属网络端点；
     * 默认值为private。
     * @example `private`
     */
    "NetworkAccessEndpointType"?: string;
    /**
     * 专属网络端点连接的VPC ID。NetworkAccessEndpointType取值为shared时不生效。
     * @example `vpc-examplexxx`
     */
    "VpcId"?: string;
    /**
     * 专属网络端点连接的VPC所属地域，该地域取值必须在ListNetworkAccessEndpointAvailableRegions接口中返回。NetworkAccessEndpointType取值为shared时不生效。
     * @example `cn-hangzhou`
     */
    "VpcRegionId"?: string;
    /**
     * 网络端点的状态，取值可选范围：
     *
     * - pending：待初始化。
     * - creating：创建中。
     * - running：运行中。
     * - deleting：删除中。
     * NetworkAccessEndpointType取值为shared时，当前筛选参数不生效。
     * @example `running`
     */
    "NetworkAccessEndpointStatus"?: string;
}
