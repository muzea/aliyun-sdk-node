export interface DescribeDrdsParamsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `DescribeDrdsParams`
     */
    "DrdsInstanceId": string;
    /**
     * 参数级别，取值：
     * * **INSTANCE**：实例级别
     * * **DB**：数据库级别
     * @example `INSTANCE`
     */
    "ParamLevel": string;
    /**
     * 数据库名称。
     * @example `drds_test`
     */
    "DbName"?: string;
}
