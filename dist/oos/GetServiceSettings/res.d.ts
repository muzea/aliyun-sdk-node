export interface GetServiceSettingsResponse {
    /**
     * 请求ID
     * @example `9F755DC9-C0CF-4598-B2E3-2CC763F18CB2`
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
         * OSS存储空间目录，如"oos/execution"，传入""表示不需要目录，若之前设置过再次设置不需要目录可通过传入""清空
         * @example `oos/execution`
         */
        DeliveryOssKeyPrefix: string;
        /**
         * 是否开启了向OSS投递模板执行记录功能
         * @example `false`
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
