export interface DescribeDrdsDBIpWhiteListRequest {
    /**
     * 实例所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `drds********`
     */
    "DrdsInstanceId": string;
    /**
     * 数据库名称。
     * @example `test_db`
     */
    "DbName": string;
    /**
     * 白名单分组名称。
     * @example `group1`
     */
    "GroupName"?: string;
}
