export interface DescribeInstanceAttachmentAttributesRequest {
    /**
     * 弹性保障服务所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。取值可以由多个实例ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
     * @example `["i-bp67acfmxazb4****", "i-bp67acfmxazb5****", "i-bp67acfmxazb6****"]`
     */
    "InstanceIds": string;
    /**
     * 实例状态列表的页码。
     * 起始值：1
     * 默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 最大值：100
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
}
