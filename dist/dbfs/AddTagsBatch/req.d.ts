export interface AddTagsBatchRequest {
    /**
     * 所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 待添加标签的数据库文件系统实例列表。
     * @example `["dbfs-nUy1tb********BQ4X8Gpw","dbfs-v0WvA********tVEVcgJLg"]`
     */
    "DbfsList": string;
    /**
     * 待添加的标签列表。
     * TagKey：资源的标签键。取值范围：最大长度为64个字符，可包含英文大小写字母、中文、数字和特殊符号@_-=+;:,<.>/?
     *  TagValue：资源的标签值。取值范围：最大长度为128个字符，可包含英文大小写字母、中文、数字和特殊符号@_-=+;:,<.>/?
     * @example `[{"TagKey":"k1","TagValue":"v1"},{"TagKey":"k2","TagValue":"v2"}]`
     */
    "Tags": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
