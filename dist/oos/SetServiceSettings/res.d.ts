export interface SetServiceSettingsResponse {
    /**
     * 请求ID。
     * @example `CBEC8072-BEC2-478E-8EAE-E723BA79CF19`
     */
    RequestId: string;
    /**
     * 投递功能配置详情
     */
    ServiceSettings: {
        /**
         * OSS存储空间名称
         * @example `OssBucketName`
         */
        DeliveryOssBucketName: string;
        /**
         * OSS存储空间目录
         * @example `oos/execution`
         */
        DeliveryOssKeyPrefix: string;
        /**
         * 是否开启了向OSS投递模板执行记录功能
         * @example `true`
         */
        DeliveryOssEnabled: boolean;
        /**
         * 是否开启了向SLS投递模板执行记录功能
         * @example `false`
         */
        DeliverySlsEnabled: boolean;
        /**
         * SLS的项目名称
         * @example `SlsProjectName`
         */
        DeliverySlsProjectName: string;
        /**
         * 云效企业ID
         * @example `RdcEnterpriseId`
         */
        RdcEnterpriseId: string;
    }[];
}
