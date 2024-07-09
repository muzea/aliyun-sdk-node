export interface TagDbfsRequest {
    /**
     * 所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 数据库文件系统ID。
     * @example `dbfs-nUy1tb********BQ4X8Gpw`
     */
    "DbfsId": string;
    /**
     * 待设置的标签列表。
     * TagKey：资源的标签键。取值范围：最大长度为64个字符，可包含英文大小写字母、中文、数字和特殊符号@_-=+;:,<.>/?
     * TagValue：资源的标签值。取值范围：最大长度为128个字符，可包含英文大小写字母、中文、数字和特殊符号@_-=+;:,<.>/?
     * @example `[{"TagKey":"k1","TagValue":"v1"},{"TagKey":"k2","TagValue":"v2"}]`
     */
    "Tags": string;
}
