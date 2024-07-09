export interface ReleaseGPUInstanceRequest {
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 调用开始日期，格式为EEE,d MMM yyyy HH:mm:ss GMT。
     * @example `2022-11-11 07:31:04.899465017 +0000 UTC m=+37.671563424`
     */
    "X-Fc-Date"?: string;
    /**
     * 自定义请求ID。
     * @example `test-trace-id`
     */
    "X-Fc-Trace-Id"?: string;
    /**
     * 实例ID。
     * @example `i-xxx`
     */
    "instanceId": string;
}
