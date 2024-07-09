export interface ModifySqlLogConfigRequest {
    /**
     * 数据库实例ID。
     * @example `rr-2ze770smbq3tp****`
     */
    "InstanceId": string;
    /**
     * 是否开启DAS企业版：
     * - **true**：是。
     * - **false**：否。
     * > 开通企业版时必须配置，默认开启当前支持的最新版本。
     * @example `true`
     */
    "Enable"?: boolean;
    /**
     * 是否开启SQL洞察。
     * - **true**：是。
     * - **false**：否。
     * > 仅支持开通企业版 V3时，需要配置该参数。
     * @example `true`
     */
    "RequestEnable"?: boolean;
    /**
     * 数据总存储时长，单位为天，取值为：
     * -  7
     * - 30
     * - 180
     * - 365
     * > 开通DAS企业版 V3时，该参数取值必须大于等于30。
     * @example `30`
     */
    "Retention"?: number;
    /**
     * 数据热存储时长，单位为天，取值为[1, 7]范围内的整数。
     * > 仅支持开通企业版 V3时，需要配置该参数。
     * @example `1`
     */
    "HotRetention"?: number;
    /**
     * 预留参数。
     */
    "Filters"?: {
        /**
         * 预留参数。
         * @example `None`
         */
        Key: string;
        /**
         * 预留参数。
         * @example `None`
         */
        Value: string;
    }[];
}
