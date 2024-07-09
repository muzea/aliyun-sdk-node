export interface EstimatedRestartTimeRequest {
    /**
     * 实例ID。
     * @example `es-cn-n6w1o1x0w001c****`
     */
    "InstanceId": string;
    /**
     * 是否是强制重启。默认：false。
     * @example `false`
     */
    "force"?: boolean;
    "body"?: string;
}
