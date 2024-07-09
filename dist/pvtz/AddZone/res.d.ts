export interface AddZoneResponse {
    /**
     * zone名称。
     * @example `example.com`
     */
    ZoneName: string;
    /**
     * zone ID。
     * @example `AgIDE1MQ_151`
     */
    ZoneId: string;
    /**
     * 请求ID。
     * @example `46973D4C-E3E4-4ABA-9190-9A9DE406C7E`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
}
