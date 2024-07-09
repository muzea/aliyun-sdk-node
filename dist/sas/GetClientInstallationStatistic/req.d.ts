export interface GetClientInstallationStatisticRequest {
    /**
     * 统计起始时间戳。单位：毫秒。
     * @example `1687104000000`
     */
    "TimeStart": number;
    /**
     * 统计结束时间戳。单位：毫秒。
     * @example `1687708800000`
     */
    "TimeEnd": number;
}
