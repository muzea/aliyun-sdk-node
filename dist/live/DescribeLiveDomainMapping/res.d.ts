export interface DescribeLiveDomainMappingResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F6CD8`
     */
    RequestId: string;
    LiveDomainModels: {
        /**
         * 直播域名映射列表。
         */
        LiveDomainModel: {
            /**
             * 查询域名的属性。取值：
             * - **vhost**：主播流域名。
             * - **publish**：推流域名。
             * - **play**：子播流域名。
             * @example `play`
             */
            Type: string;
            /**
             * 查询域名的映射域名。
             * @example `example.aliyundoc.com`
             */
            DomainName: string;
        }[];
    };
}
