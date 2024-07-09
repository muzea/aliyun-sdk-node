export interface RebootInstancesRequest {
    /**
     * 云手机实例所属地域。
     * @example `cn-hangzou`
     */
    "RegionId": string;
    /**
     * 云手机实例ID。
     */
    "InstanceId": string[];
    /**
     * 是否强制重启。取值范围：
     * - true：强制重启。相当于典型的断电操作，所有未写入存储设备的缓存数据会丢失。
     * - false：正常重启。
     * 默认值：false
     * @example `false`
     */
    "Force"?: boolean;
}
