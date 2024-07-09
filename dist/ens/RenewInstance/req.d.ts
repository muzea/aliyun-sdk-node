export interface RenewInstanceRequest {
    /**
     * 需要续费的实例ID。
     * @example `i-56789acfmxazb4p****`
     */
    "InstanceId": string;
    /**
     * 包年包月续费时长。
     * @example `1`
     */
    "Period": number;
}
