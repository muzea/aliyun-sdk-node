export interface ListEventInProgressResponse {
    /**
     * 事件列表。
     */
    Data: {
        /**
         * 事件id
         * @example `101`
         */
        Id: number;
        /**
         * 事件开始时间
         * @example `1680660940017`
         */
        StartTime: number;
        /**
         * 事件标题
         * @example `部分地域电信网络访问异常`
         */
        Title: string;
        /**
         * 事件进展列表
         */
        EventUpdates: {
            /**
             * 事件进展内容
             * @example `尊敬的客户：
            
                  您好！北京时间2023年06月20日 22:39-23:05，阿里云成都地域客户通过电信网络访问中国北方部分地域、阿里云北京地域通过电信网络访问中国西南部分地域时出现网络丢包现象，阿里云工程师初步确认因运营商问题导致，已向运营商报障。经过阿里云工程师紧急处理，网络丢包问题已恢复。非常抱歉给您带来的不便，如您有任何问题，请随时联系我们`
             */
            Content: string;
            /**
             * 事件进展发布时间
             * @example `1680660940017`
             */
            PublishTime: number;
        }[];
        /**
         * 事件详细影响面列表
         */
        Impacts: {
            /**
             * 云产品
             */
            Product: {
                /**
                 * 云产品id
                 * @example `ecs`
                 */
                ProductId: string;
                /**
                 * 原产品名称
                 * @example `云服务器 ECS`
                 */
                ProductName: string;
            };
            /**
             * 地域 id
             */
            Region: {
                /**
                 * 地区标识
                 * @example `cn-shanghai
                `
                 */
                RegionId: string;
                /**
                 * 地区名
                 * @example `华东2（上海）`
                 */
                RegionName: string;
            };
            /**
             * 影响开始时间
             * @example `1680660940017`
             */
            StartTime: number;
            /**
             * 恢复时间
             * @example `1680660940017`
             */
            RecoveryTime: number;
        }[];
    }[];
    /**
     * 请求 ID
     * @example `56CC5080-39B9-50AD-AEA1-483D9B0F8F24`
     */
    RequestId: string;
}
