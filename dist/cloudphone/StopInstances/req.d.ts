export interface StopInstancesRequest {
    /**
     * 云手机实例所属地域
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID列表，N的取值范围1-100。
     */
    "InstanceId": string[];
    /**
     * 是否强制关机。取值范围：
     * - true：强制关机。相当于典型的断电操作，所有未写入存储设备的缓存数据会丢失。
     * - false：正常关机。
     * 默认值：false
     * @example `false`
     */
    "Force"?: boolean;
}
