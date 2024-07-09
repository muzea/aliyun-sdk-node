export interface DescribeOpEntitiesRequest {
    /**
     * 分页查询时，设置当前页面的页码。
     *
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页查询时，设置每页包含操作日志的数量。最大值：50。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 设置开始时间，查询在**StartTime**后产生的操作日志。使用时间戳表示，单位：毫秒。
     * @example `1609430400000`
     */
    "StartTime": number;
    /**
     * 设置结束时间，查询在**EndTime**前产生的操作日志。使用时间戳表示，单位：毫秒。
     * @example `1640880000000`
     */
    "EndTime": number;
    /**
     * 设置操作日志的排序字段。取值固定为**opdate**，表示按照操作时间排序。
     * @example `opdate`
     */
    "OrderBy"?: string;
    /**
     * 设置操作日志的排序方式。取值：
     * - **ASC**：表示按照正序排序。
     * - **DESC**：表示按照倒序排序。
     * 默认：**DESC**
     * @example `ASC`
     */
    "OrderDir"?: string;
    /**
     * 要查询的DDoS原生防护实例的ID。
     * > 您可以调用[DescribeInstanceList](~~118698~~)查询所有DDoS原生防护实例的ID。
     * @example `ddosbgp-cn-n6w1r7nz****`
     */
    "InstanceId"?: string;
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
