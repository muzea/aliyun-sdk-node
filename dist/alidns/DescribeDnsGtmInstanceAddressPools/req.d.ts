export interface DescribeDnsGtmInstanceAddressPoolsRequest {
    /**
     * 部分返回参数语言。默认值：en。取值范围：en、zh、ja。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * GTM实例id。
     * @example `gtm-cn-wwo3a3hbz**`
     */
    "InstanceId": string;
    /**
     * 当前页数，起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `1`
     */
    "PageSize"?: number;
}
