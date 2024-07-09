export interface DescribeSyncReportDetailRequest {
    /**
     * 实例ID。
     * @example `airec-cn-o400whm78004`
     */
    "instanceId": string;
    /**
     * 开始时间秒级时间戳
     * @example `1586673466`
     */
    "startTime": number;
    /**
     * 结束时间秒级时间戳
     * @example `1586673466`
     */
    "endTime": number;
    /**
     * behavior/item/user表
     * @example `behavior`
     */
    "type": string;
    /**
     * 严重等级 error/warn/info
     * @example `error`
     */
    "levelType": string;
}
