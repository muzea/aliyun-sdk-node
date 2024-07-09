export interface ListClassesRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 需要查询的实例商品码。
     * <props="china">
     * * **bards**：主实例按量付费
     * * **rds**：主实例包年包月
     * * **rords**：只读实例按量付费
     * * **rds\_rordspre\_public\_cn**：只读实例包年包月
     * </props>
     * <props="intl">
     * * **bards_intl**：主实例按量付费
     * * **rds_intl**：主实例包年包月
     * * **rords_intl**：只读实例按量付费
     * * **rds\_rordspre\_public_intl**：只读实例包年包月
     * </props>
     * @example `bards`
     */
    "CommodityCode": string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * >查询只读实例规格列表，即**CommodityCode**参数中传入只读实例商品码时，本参数必传。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId"?: string;
    /**
     * 需要查询的订单类型，取值：
     * * **BUY**：新购。
     * * **UPGRADE**：变更配置。
     * * **RENEW**：续费。
     * * **CONVERT**：转换付费类型。
     * @example `BUY`
     */
    "OrderType": string;
    /**
     * 地域ID。可调用DescribeRegions获取。
     * >如果您使用的是阿里云国际站账号，此参数必传。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
