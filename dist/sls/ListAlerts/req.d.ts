export interface ListAlertsRequest {
    /**
     * Project名称
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 查询开始行。默认值为0。
     * @example `0`
     */
    "offset"?: number;
    /**
     * 分页查询时，设置的每页行数。最大值为200。默认值为200。
     * @example `10`
     */
    "size"?: number;
    /**
     * 获取指定Logstore下的告警规则。默认值为空。
     * @example `ali-test-logstore`
     */
    "logstore"?: string;
}
