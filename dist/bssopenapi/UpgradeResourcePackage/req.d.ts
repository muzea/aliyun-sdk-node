export interface UpgradeResourcePackageRequest {
    /**
     * 用户实例ID。
     * @example `OSSBAG-cn-0xl*****x002`
     */
    "InstanceId": string;
    /**
     * 资源包生效时间，不填默认立即生效。
     * 日期格式按照ISO8601标准表示，并需要使用UTC时间。格式为：yyyy-MM-ddTHH:mm:ssZ。
     * @example `2020-02-02T12:00:00Z`
     */
    "EffectiveDate"?: string;
    /**
     * 升级资源包规格大小。
     * @example `51200`
     */
    "Specification"?: string;
}
