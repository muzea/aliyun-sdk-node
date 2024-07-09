export interface DescribeSimilarEventScenariosRequest {
    /**
     * 要查询的访问源的IP地址。
     * @example `1.2.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 要查询的安全告警事件的ID。
     * @example `12321`
     */
    "SecurityEventId": number;
}
