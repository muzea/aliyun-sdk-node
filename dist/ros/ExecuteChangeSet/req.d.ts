export interface ExecuteChangeSetRequest {
    /**
     * 更改集所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 更改集ID。
     * @example `1f6521a4-05af-4975-afe9-bc4b45ad****`
     */
    "ChangeSetId": string;
    /**
     * 保证请求的幂等性。该参数值由客户端生成，并且必须全局唯一。
     * 长度不超过64个字符。可包含英文字母、数字、短划线（-）和下划线（_）。
     * 更多详情，请参见[如何保证幂等性](~~134212~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
