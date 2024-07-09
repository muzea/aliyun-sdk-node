export interface UpdateInstanceNetworkRequest {
    /**
     * DRDS实例ID。
     * @example `drds******`
     */
    "DrdsInstanceId": string;
    /**
     * DRDS实例当前的网络类型，取值范围如下：
     * * vpc：专有网络
     * * classic：经典网络
     * @example `classic`
     */
    "SrcInstanceNetworkType": string;
    /**
     * 是否保留经典网络地址。
     * @example `true`
     */
    "RetainClassic"?: boolean;
    /**
     * 经典网络地址保留天数。
     * @example `30`
     */
    "ClassicExpiredDays"?: number;
}
