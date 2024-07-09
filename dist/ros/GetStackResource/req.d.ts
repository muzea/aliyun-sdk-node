export interface GetStackResourceRequest {
    /**
     * 资源栈ID。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    "StackId": string;
    /**
     * 保证请求的幂等性。该值由客户端生成，并且必须是全局唯一的。
     * 长度不超过64个字符，可包含英文字母、数字、短划线（-）和下划线（_）。
     * 更多信息，请参见[如何保证幂等性](~~134212~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 资源栈所属的地域ID。您可以通过调用[DescribeRegions](~~131035~~)接口查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否查询资源属性。取值：
     * - true：查询资源属性。
     * - false：不查询资源属性。
     * @example `true`
     */
    "ShowResourceAttributes"?: boolean;
    /**
     * 资源逻辑ID，即模板中资源的名称。
     * @example `WebServer`
     */
    "LogicalResourceId": string;
    /**
     * 指定要查询的资源输出属性的列表。
     * > N最大值为20。
     */
    "ResourceAttributes"?: string[];
}
