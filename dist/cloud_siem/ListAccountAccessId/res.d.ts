export interface ListAccountAccessIdResponse {
    /**
     * 请求返回值。
     */
    Data: {
        /**
         * 多云AccessKeyId对应的阿里云账号ID。
         * @example `ABCXXXXXXXX`
         */
        SubUserId: number;
        /**
         * 多云AccessKeyId对应的MD5值。
         * @example `abcXXXXXXXX`
         */
        AccessIdMd5: string;
        /**
         * 多云AccessKeyId所属的账号信息，格式为阿里云账号ID|阿里云账号名称|多云AccessKeyId。
         * @example `123xxxxxx|xxxx|ABCXXXXX`
         */
        AccountStr: string;
        /**
         * 该AccessKeyId是否已经被绑定到威胁分析。取值：
         *  - 0 : 未绑定。
         *  - 1：已绑定。
         * @example `1`
         */
        Bound: number;
        /**
         * 已经绑定ACCESS_KEY_ID。
         * @example `ABCXXXXXXXX`
         */
        AccessId: string;
        /**
         * 云账号ID。
         * @example `123xxxxxxx`
         */
        AccountId: string;
        /**
         * 多云的code。
         * @example `hcloud`
         */
        CloudCode: string;
    }[];
    /**
     * 本次请求是否成功。取值：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * HTTP状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 返回消息描述。
     * @example `success`
     */
    Message: string;
    /**
     * 请求消息ID。
     * @example `6276D891-*****-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
