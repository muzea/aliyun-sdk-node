export interface DescribeDdosEventRequest {
    /**
     * 要查询的DDoS攻击事件的开始时间。使用时间戳表示，单位：秒。
     * @example `1633017600`
     */
    "StartTime": number;
    /**
     * 要查询的DDoS攻击事件的结束时间。使用时间戳表示，单位：秒。
     * @example `1638288000`
     */
    "EndTime": number;
    /**
     * 分页查询时，设置每页包含DDoS攻击事件的数量。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 分页查询时，设置当前页面的页码。
     * @example `1`
     */
    "PageNo": number;
    /**
     * 要查询的DDoS原生防护实例的ID。
     * > 您可以调用[DescribeInstanceList](~~118698~~)查询所有DDoS原生防护实例的ID。
     * @example `ddosbgp-cn-n6w1r7nz****`
     */
    "InstanceId": string;
    /**
     * 要查询的被攻击IP。
     * @example `47.89.XX.XX`
     */
    "Ip"?: string;
    /**
     * DDoS原生防护实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * DDoS原生防护实例所在地域ID。
     * > 您可以调用[DescribeRegions](~~118703~~)查询DDoS原生防护支持的所有地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
