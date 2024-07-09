export interface DescribeServcieScheduleRequest {
    /**
     * 应用ID。
     * @example `474bdef0-d149-4695-abfb-52912d9143f0`
     */
    "AppId": string;
    /**
     * 终端设备唯一ID。
     * @example `hdm_f022bf160dc69e2d8eb421e508eb****`
     */
    "Uuid": string;
    /**
     * 无效参数。
     * @example `android`
     */
    "PodConfigName"?: string;
}
