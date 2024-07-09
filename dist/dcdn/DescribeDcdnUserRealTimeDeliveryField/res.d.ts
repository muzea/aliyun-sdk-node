export interface DescribeDcdnUserRealTimeDeliveryFieldResponse {
    /**
     * 请求ID。
     * @example `3EACD23C-F49F-4BF7-B9AD-C2CD3BA888C4`
     */
    RequestId: string;
    Content: {
        /**
         * 域名配置结果信息。
         */
        Fields: {
            /**
             * 字段描述。
             * @example `访问时间`
             */
            Description: string;
            /**
             * 是否选择该字段。
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            Selected: boolean;
            /**
             * 字段名称。
             * @example `unixtime`
             */
            FieldName: string;
        }[];
    };
}
