export interface ListCloudGtmInstancesResponse {
    /**
     * 唯一请求识别码。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `20`
     */
    PageSize: number;
    /**
     * 总页数。
     * @example `1`
     */
    TotalPages: number;
    /**
     * 实例总条目数。
     * @example `15`
     */
    TotalItems: number;
    Instances: {
        /**
         * 实例列表。
         */
        Instance: {
            /**
             * GTM实例id。
             * @example `gtm-cn-jmp3qnw**03`
             */
            InstanceId: string;
            /**
             * 实例名称。
             * @example `test`
             */
            InstanceName: string;
            /**
             * 实例创建时间。
             * @example `2024-03-15T01:46Z`
             */
            CreateTime: string;
            /**
             * 实例创建时间（时间戳）。
             * @example `1231298343343`
             */
            CreateTimestamp: number;
            /**
             * 实例最后一次修改时间。
             * @example `2024-03-15T01:46Z
            `
             */
            UpdateTime: string;
            /**
             * 实例最后一次修改时间（时间戳）。
             * @example `1231298343343`
             */
            UpdateTimestamp: number;
            /**
             * GTM实例版本：
             * - standard：标准版
             * - ultimate：旗舰版
             * @example `ultimate`
             */
            VersionCode: string;
            /**
             * 商品编码：
             * - dns_gtm_public_cn：中国站商品编码；
             * - dns_gtm_public_intl：国际站商品编码；
             * @example `dns_gtm_public_cn`
             */
            CommodityCode: string;
            /**
             * 短息配额，仅中国站支持短消息，国际站不支持短消息。
             * @example `1000`
             */
            MonthlySmsQuota: number;
            /**
             * 监控探测任务配额。
             * @example `100`
             */
            MonitorTaskQuota: number;
            /**
             * 实例到期时间（时间戳）。
             * @example `1231298343343`
             */
            ExpireTimestamp: number;
            /**
             * 实例到期时间。
             * @example `2024-03-15T01:46Z`
             */
            ExpireTime: string;
            /**
             * 接入域名，即GTM的CNAME接入域名。
             * @example `www.example.com`
             */
            ScheduleDomainName: string;
            /**
             * 当月短信发送量，仅中国站支持短信，国际站不支持短信。
             * @example `100`
             */
            MonthlySmsUsed: number;
            /**
             * 当月邮件发送量。
             * @example `50`
             */
            MonthlyEmailUsed: number;
            /**
             * 当月 webhook 发送量。
             * @example `80`
             */
            MonthlyWebhookUsed: number;
        }[];
    };
}
