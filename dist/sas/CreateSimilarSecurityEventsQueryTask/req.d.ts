export interface CreateSimilarSecurityEventsQueryTaskRequest {
    /**
     * 访问源的IP地址。
     * @example `1.2.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 告警事件的ID。
     * @example `14323`
     */
    "SecurityEventId": number;
    /**
     * 相同类型或命中规则的告警事件的code值。
     * @example `default`
     */
    "SimilarEventScenarioCode"?: string;
}
