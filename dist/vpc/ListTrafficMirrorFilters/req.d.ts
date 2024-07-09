export interface ListTrafficMirrorFiltersRequest {
    /**
     * 流量镜像筛选条件的名称。
     * @example `abc`
     */
    "TrafficMirrorFilterName"?: string;
    /**
     * 本次查询的最大记录条数。
     * 取值范围：**1**~**100**。默认值：**10**。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 流量镜像筛选条件的实例ID。其中**N**最大取值为**100**，即一次支持查询最多100条筛选条件。
     * @example `tmf-j6cmls82xnc86vtpe****`
     */
    "TrafficMirrorFilterIds"?: string[];
    /**
     * 流量镜像的所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。关于流量镜像支持的地域，请参见[流量镜像概述](~~207513~~)。
     * @example `cn-hongkong`
     */
    "RegionId": string;
    /**
     * 流量镜像所属的资源组ID。
     * @example `rg-bp67acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tags"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
