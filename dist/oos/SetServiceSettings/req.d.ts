export interface SetServiceSettingsRequest {
    /**
     * 是否开启向OSS投递模板执行记录功能，默认为false。
     * @example `false`
     */
    "DeliveryOssEnabled"?: boolean;
    /**
     * OSS存储空间名称。
     * @example `OssBucketName`
     */
    "DeliveryOssBucketName"?: string;
    /**
     * OSS存储空间目录，如"oos/execution",传入""表示不需要目录，若之前设置过再次设置不需要目录可通过传入""清空。
     * @example `oos/execution`
     */
    "DeliveryOssKeyPrefix"?: string;
    /**
     * SLS的项目名称。
     * @example `SlsProjectName`
     */
    "DeliverySlsProjectName"?: string;
    /**
     * 是否开启向SLS投递模板执行记录功能，默认为false。
     * @example `false`
     */
    "DeliverySlsEnabled"?: boolean;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 云效企业ID。
     * @example `RdcEnterpriseId`
     */
    "RdcEnterpriseId"?: string;
}
