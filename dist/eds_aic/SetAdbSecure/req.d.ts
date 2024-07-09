export interface SetAdbSecureRequest {
    /**
     * 云手机实例ID列表，最多支持50个实例。
     */
    "InstanceIds"?: string[];
    /**
     * ADB鉴权开关状态。
     * @example `1`
     */
    "Status": number;
}
