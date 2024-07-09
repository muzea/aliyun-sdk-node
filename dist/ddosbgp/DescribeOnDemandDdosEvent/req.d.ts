export interface DescribeOnDemandDdosEventRequest {
    /**
     * 要查询的DDoS攻击事件的开始时间。使用时间戳表示，单位：秒。
     * @example `1557305044`
     */
    "StartTime": number;
    /**
     * 要查询的DDoS攻击事件的结束时间。使用时间戳表示，单位：秒。
     * @example `1557909844`
     */
    "EndTime": number;
    /**
     * 分页查询时，设置每页包含事件的数量。最大值为**50**。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 分页查询时，设置当前页面的页码。
     * @example `1`
     */
    "PageNo": number;
    /**
     * 要查询的代播实例的ID。
     * > 您可以调用[DescribeOnDemandInstance](~~152120~~)查询代播实例的ID。
     * @example `ddosbgp-cn-n6w1r7nz****`
     */
    "InstanceId": string;
    /**
     * 要查询的代播IP。
     * @example `192.XX.XX.1`
     */
    "Ip"?: string;
    /**
     * DDoS原生防护实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 要查询的代播实例的地域ID。
     * > 您可以调用[DescribeRegions](~~118703~~)查询DDoS原生防护支持的所有地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
