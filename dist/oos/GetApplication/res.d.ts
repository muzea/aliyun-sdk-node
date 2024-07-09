export interface GetApplicationResponse {
    /**
     * 请求ID。
     * @example `51004B8A-6D9A-5ACB-9158-6C6794496AD0`
     */
    RequestId: string;
    /**
     * 应用详细信息。
     */
    Application: {
        /**
         * 应用描述信息。
         * @example `Application`
         */
        Description: string;
        /**
         * 更新时间。
         * @example `2021-09-07T09:17:46Z`
         */
        UpdateDate: string;
        /**
         * 资源组ID。
         * @example `rg-acfmxsn4m******`
         */
        ResourceGroupId: string;
        /**
         * 标签。
         * @example `{"k1": "v1", "k2": "v2"}`
         */
        Tags: any;
        /**
         * 应用名称。
         * @example `MyApplication`
         */
        Name: string;
        /**
         * 创建时间。
         * @example `2021-09-07T09:17:46Z`
         */
        CreateDate: string;
        /**
         * 应用类型。
         * @example `DingTalk`
         */
        ApplicationType: string;
        /**
         * 应用报警配置。
         */
        AlarmConfig: {
            /**
             * 报警联系组。
             */
            ContactGroups: string[];
            /**
             * 报警模板组。
             */
            TemplateIds: string[];
            /**
             * 应用的健康检查URL
             * @example `/api/health/`
             */
            HealthCheckUrl: string;
        };
        /**
         * 应用模板对应的计算巢服务ID
         * @example `service-79538e30e44541b699d8`
         */
        ServiceId: string;
    };
}
