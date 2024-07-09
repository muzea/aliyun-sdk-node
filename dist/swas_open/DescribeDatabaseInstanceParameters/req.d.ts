export interface DescribeDatabaseInstanceParametersRequest {
    /**
     * 指定的轻量数据库实例所属的地域ID。
     * 您可以调用[ListRegions](~~189315~~)查看支持的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 轻量数据库实例ID。
     * @example `db-38263fa955774501a2ae1bdaed6f****`
     */
    "DatabaseInstanceId": string;
}
