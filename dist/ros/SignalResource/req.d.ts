export interface SignalResourceRequest {
    /**
     * 资源栈ID。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    "StackId": string;
    /**
     * 信号的状态。故障信号会导致无法创建或更新资源栈，如果所有信号都是警告信号，则将无法创建或更新资源栈。取值：
     * - SUCCESS
     * - FAILURE
     * - WARNING
     * @example `SUCCESS`
     */
    "Status": string;
    /**
     * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 信号的唯一ID。长度为1~64个字符。如果向单个资源发送多个信号（例如发信号通知等待条件），则每个信号都需要不同的信息ID。
     * @example `27c7347b-352a-4377-accf-63d361c1****`
     */
    "UniqueId": string;
    /**
     * 保证请求的幂等性。 该值由客户端生成，并且必须是全局唯一的。
     * 长度最大为64个字符，可包含英文字符、数字、短划线（-）和下划线（_）。
     * 更多详情，请参见[如何保证幂等性](~~134212~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 资源逻辑ID，即模板中资源的名称。
     * @example `WebServer`
     */
    "LogicalResourceId": string;
}
