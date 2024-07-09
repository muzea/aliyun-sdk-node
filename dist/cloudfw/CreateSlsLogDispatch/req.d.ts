export interface CreateSlsLogDispatchRequest {
    /**
     * SLS地域ID。
     * @example `ap-southeast-1`
     */
    "SlsRegionId"?: string;
    /**
     * 日志存储时长，单位：天。
     * @example `20`
     */
    "Ttl"?: number;
}
