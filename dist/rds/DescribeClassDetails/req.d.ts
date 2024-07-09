export interface DescribeClassDetailsRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 地域ID，可以通过接口DescribeRegions查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 商品码。取值：
     * * **bards**：主实例按量付费
     * * **rds**：主实例包年包月
     * * **rords**：只读实例按量付费
     * * **rds\_rordspre\_public\_cn**：只读实例包年包月
     * * **bards_intl**：主实例按量付费
     * * **rds_intl**：主实例包年包月
     * * **rords_intl**：只读实例按量付费
     * * **rds\_rordspre\_public\_intl**：只读实例包年包月
     * @example `rds`
     */
    "CommodityCode": string;
    /**
     * 规格代码。
     * @example `rds.mysql.s3.large`
     */
    "ClassCode": string;
    /**
     * 数据库版本。
     * @example `5.6`
     */
    "EngineVersion": string;
    /**
     * 数据库引擎类型。
     * @example `MySQL`
     */
    "Engine": string;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute获取。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
