export interface ListAccessKeysResponse {
    AccessKeys: {
        /**
         * 用户信息集合。
         */
        AccessKey: {
            /**
             * 状态，激活或禁用。
             * @example `Active`
             */
            Status: string;
            /**
             * 访问密钥标识。
             * @example `0wNEpMMlzy7s****`
             */
            AccessKeyId: string;
            /**
             * 创建时间。
             * @example `2015-01-23T12:33:18Z`
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
