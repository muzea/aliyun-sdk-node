export interface DescribeDatabaseInstancesRequest {
    /**
     * 指定的轻量数据库实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 轻量数据库实例ID。
     * 取值可以由多个轻量数据库实例ID组成一个JSON数组，最多支持100个实例ID，ID之间用英文半角逗号（,）隔开。
     * @example `["swasdb-xxx******","swasdb-yyy******"]`
     */
    "DatabaseInstanceIds"?: string;
    /**
     * 轻量数据库实例列表的页码。
     * 起始值：1
     * 默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 最大值：100。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
}
