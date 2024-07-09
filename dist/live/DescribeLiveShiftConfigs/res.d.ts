export interface DescribeLiveShiftConfigsResponse {
    /**
     * 请求ID。
     * @example `B49E6DDA-F413-422B-B58E-2FA23F286726`
     */
    RequestId: string;
    Content: {
        /**
         * 配置列表。
         */
        Config: {
            /**
             * 配置的应用。
             * @example `liveApp****`
             */
            AppName: string;
            /**
             * 配置的保存天数。
             * @example `7`
             */
            Vision: number;
            /**
             * 配置的域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 配置的流名称。
             * @example `liveStream****`
             */
            StreamName: string;
            /**
             * 是否忽略对应转码流生成时移。取值：
             * - **true**：转码流不生成时移。
             * - **false**：转码流生成时移。
             * 默认选择为true。
             * @example `true`
             */
            IgnoreTranscode: boolean;
        }[];
    };
}
