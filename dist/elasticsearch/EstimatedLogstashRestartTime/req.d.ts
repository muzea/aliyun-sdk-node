export interface EstimatedLogstashRestartTimeRequest {
    /**
     * 实例ID。
     * @example `ls-cn-oew1qbgl****`
     */
    "InstanceId": string;
    /**
     * 是否是强制重启。默认：false。
     * @example `false`
     */
    "force"?: boolean;
    "body"?: string;
}
