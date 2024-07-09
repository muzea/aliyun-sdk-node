export interface ListMessageAppResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-****-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 应用列表。
         */
        AppList: {
            /**
             * 应用配置。
             */
            AppConfig: any;
            /**
             * 互动消息应用ID。
             * @example `VKL3***`
             */
            AppId: string;
            /**
             * 互动消息应用名称。
             * @example `test`
             */
            AppName: string;
            /**
             * 应用创建的UTC时间戳。
             * @example `502280113`
             */
            CreateTime: number;
            /**
             * 拓展字段。
             */
            Extension: any;
            /**
             * 互动消息应用状态。取值为**1**表示应用状态正常。
             * @example `1`
             */
            Status: number;
        }[];
        /**
         * 是否还有下一页，取值：
         * - true：有下一页。
         * - false：没有下一页。
         * @example `false`
         */
        HasMore: boolean;
        /**
         * 互动消息应用总数。
         * @example `15`
         */
        Total: number;
    };
}
