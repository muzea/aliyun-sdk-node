export interface ListDcdnRealTimeDeliveryProjectResponse {
    /**
     * 查询总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `3EACD23C-F49F-4BF7-B9AD-C2CD3BA888C4`
     */
    RequestId: string;
    Content: {
        /**
         * 域名配置结果信息。
         */
        Projects: {
            /**
             * 投递类型，目前仅支持**SLS_POST**（SLS投递）。
             * @example `SLS_POST`
             */
            Type: string;
            /**
             * 日志库名称。
             * @example `example-cn`
             */
            SLSLogStore: string;
            /**
             * 数据中心。
             * @example `cn`
             */
            DataCenter: string;
            /**
             * 字段名称。所有字段请参见[实时日志采集字段说明](~~324199~~)。
             * @example `field1,field2`
             */
            FieldName: string;
            /**
             * 项目名称。
             * @example `example`
             */
            ProjectName: string;
            /**
             * 采样率。
             * @example `1`
             */
            SamplingRate: number;
            /**
             * 日志名称。
             * @example `example-cn`
             */
            SLSProject: string;
            /**
             * 域名列表，多个域名用半角逗号（,）隔开。
             * @example `example.com,example.org`
             */
            DomainName: string;
            /**
             * 业务类型，取值：
             * - **cdn_log_access_l1**（默认值）：用户访问日志。
             * - **cdn_log_er**：边缘程序日志。
             * - **cdn_log_waf**：WAF拦截日志。
             * @example `cdn_log_access_l1`
             */
            BusinessType: string;
            /**
             * 日志区域名称。
             * @example `cn-hangzhou`
             */
            SLSRegion: string;
        }[];
    };
}
