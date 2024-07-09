export interface DescribeInternetOpenIpResponse {
    /**
     * 本次调用请求的ID。
     * @example `6B780BD6-282C-51A9-A8E6-59F636BAFA54`
     */
    RequestId: string;
    /**
     * 分页查询时的页面信息。
     */
    PageInfo: {
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 查询到的数据总条数。
         * @example `40`
         */
        TotalCount: number;
    };
    /**
     * 返回数据列表。
     */
    DataList: {
        /**
         * 风险等级。取值：
         * - **3**：高风险
         * - **2**：中风险
         * - **1**：低风险
         * - **0**：无风险
         * @example `3`
         */
        RiskLevel: number;
        /**
         * 1日流量占比，暴露IP的最近1日流量占资产最近1日所有流量的占比。单位：百分比（%）。
         * @example `11.1`
         */
        TrafficPercent1Day: string;
        /**
         * 没有智能推荐策略的原因。取值：
         * - 当前无智能策略推荐
         * - 当前只对部分用户开放该功能
         * - 策略配置已经修改，当前无智能策略推荐
         * - 智能策略已经配置，当前无新智能策略推荐
         * @example `当前无智能策略推荐`
         */
        AclRecommendDetail: string;
        /**
         * 实例名称。
         * @example `launch-advisor-2023****`
         */
        AssetsName: string;
        /**
         * 实例所在的地域ID。
         * @example `cn-shenzhen`
         */
        RegionNo: string;
        /**
         * 实例的资产类型。
         * @example `EcsEIP`
         */
        AssetsType: string;
        /**
         * 是否有推荐ACL。取值：
         * - **true**：是
         * - **false**：否
         * @example `true`
         */
        HasAclRecommend: boolean;
        /**
         * 端口总明细数。
         * @example `5`
         */
        DetailNum: number;
        /**
         * 7日流量占比，暴露IP的最近7日流量占资产最近7日所有流量的占比。单位：百分比（%）。
         * @example `77.7`
         */
        TrafficPercent7Day: string;
        /**
         * 30日流量占比，暴露IP的最近30日流量占资产最近30日所有流量的占比。单位：百分比（%）。
         * @example `99.9`
         */
        TrafficPercent30Day: string;
        /**
         * 实例的公网IP。
         * @example `203.0.113.1`
         */
        PublicIp: string;
        /**
         * 风险原因。
         * @example `历史流量均为黑流量`
         */
        RiskReason: string;
        /**
         * 实例ID。
         * @example `i-bp1ix9w22kv6aew9****`
         */
        AssetsInstanceId: string;
        /**
         * 端口列表。
         */
        PortList: string[];
        /**
         * 应用列表。
         */
        ServiceNameList: string[];
    }[];
}
