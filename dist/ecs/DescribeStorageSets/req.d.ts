export interface DescribeStorageSetsRequest {
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 存储集所属地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 存储集ID列表。取值可以由多个存储集ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
     * @example `["ss-bp1d6tsvznfghy7y****", "ss-bp1ippxbaql9zet7****", … "ss-bp1ib7bcz07l****"]`
     */
    "StorageSetIds"?: string;
    /**
     * 存储集所属可用区。您可以调用[DescribeZones](~~25610~~)查询最新的可用区列表。
     * @example `cn-hangzhou-g`
     */
    "ZoneId"?: string;
    /**
     * 存储集名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * @example `storageSetTest`
     */
    "StorageSetName"?: string;
    /**
     * 存储集列表的页码。起始值：1
     * 默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值：100
     * 默认值：10
     * @example `1`
     */
    "PageSize"?: number;
}
