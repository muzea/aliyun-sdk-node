export interface ListAccessKeysResponse {
    AccessKeys: {
        /**
         * 访问密钥信息。
         */
        AccessKey: {
            /**
             * 访问密钥状态。取值：
             * - Active：已激活。
             * - Inactive：已禁用。
             * @example `Active`
             */
            Status: string;
            /**
             * 访问密钥更新时间。
             * @example `2020-10-13T12:33:18Z`
             */
            UpdateDate: string;
            /**
             * 访问密钥ID。
             * @example `0wNEpMMlzy7s****`
             */
            AccessKeyId: string;
            /**
             * 访问密钥创建时间。
             * @example `2020-10-13T12:33:18Z`
             */
            CreateDate: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `4B450CA1-36E8-4AA2-8461-86B42BF4CC4E`
     */
    RequestId: string;
}
