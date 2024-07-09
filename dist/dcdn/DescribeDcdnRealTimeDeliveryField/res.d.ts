export interface DescribeDcdnRealTimeDeliveryFieldResponse {
    /**
     * 请求ID。
     * @example `3EACD23C-F49F-4BF7-B9AD-C2CD3BA888C4`
     */
    RequestId: string;
    Content: {
        /**
         * 返回参数内容。
         */
        Fields: {
            /**
             * 字段描述。
             * @example `访问时间`
             */
            Description: string;
            /**
             * 字段名称。所有字段请参见[实时日志采集字段说明](~~324199~~)。
             * @example `unixtime`
             */
            FieldName: string;
        }[];
    };
}
