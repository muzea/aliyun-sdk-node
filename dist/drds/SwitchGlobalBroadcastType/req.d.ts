export interface SwitchGlobalBroadcastTypeRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * DRDS实例ID。
     * @example `drds********`
     */
    "DrdsInstanceId": string;
    /**
     * DRDS数据库名称。
     * @example `test`
     */
    "DbName": string;
}
