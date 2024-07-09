export interface DeleteInstancesRequest {
    /**
     * 云手机实例所属地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云手机实例ID，N的取值范围：1~100。
     */
    "InstanceId": string[];
    /**
     * 是否强制释放运行中（Running）的云手机实例，默认为false。
     * - true：强制释放运行中（Running）的实例。强制释放相当于断电，实例内存以及存储中的临时数据都会被擦除，无法恢复。
     * - false（默认值）：正常释放实例，此时实例必须处于已停止（Stopped）状态。
     * @example `false`
     */
    "Force"?: boolean;
}
