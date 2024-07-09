export interface ScheduleKeyDeletionRequest {
    /**
     * 密钥ID。CMK全局唯一标识符。
     * @example `7906979c-8e06-46a2-be2d-68e3ccbc****`
     */
    "KeyId": string;
    /**
     * 密钥预删除周期。在这段时间内，您可以撤销删除处于待删除状态的密钥；预删除时间过后无法撤销删除。
     * 取值范围：7~366。
     * 单位：天。
     * @example `7`
     */
    "PendingWindowInDays": number;
}
