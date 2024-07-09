export interface SetupRecycleBinStatusRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * DRDS实例ID。
     * @example `drds************`
     */
    "DrdsInstanceId": string;
    /**
     * 数据库名称。
     * @example `test`
     */
    "DbName": string;
    /**
     * 表回收站的开启状态，取值范围如下：
     * * enable：开启
     * * disable：关闭
     * @example `enable`
     */
    "StatusAction": string;
}
