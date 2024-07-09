export interface InviteSubAccountResponse {
    /**
     * 错误代码:
     * - 200 OK
     * - 1109 System Error
     * @example `200`
     */
    Code: string;
    /**
     * 提示信息
     * @example `成功`
     */
    Message: string;
    /**
     * request ID，阿里云会根据这个进行错误跟踪
     * @example `9C14ADFE-DF0A-54D4-8BD5-45D0839246B4`
     */
    RequestId: string;
    /**
     * 候选值:True/False，代表了是否当前API调用本身是成功 的。不代表后续业务操作的成功。
     * @example `true`
     */
    Success: boolean;
    Results: {
        /**
         * 邀请发送结果列表
         */
        Result: {
            /**
             * 错误代码，200 OK
             * @example `200`
             */
            Code: string;
            /**
             * 提示信息，code说明
             * @example `成功`
             */
            Message: string;
            /**
             * 总是为真
             * @example `true`
             */
            Success: boolean;
            /**
             * 邀请结果返回信息
             */
            Result: {
                /**
                 * 分销客户注册URL
                 * @example `http://agency-intl.console.aliyun.com/customer/register?intl=true&fxinfo=-4uT%2FMWHnnUdvr5GXVd1AYK8luTnGgH3M7Y3lSCd5M1fxRwAkViTWtDJDpckh0HL`
                 */
                RegUrl: string;
                /**
                 * 注册URL地址的有效期限，按天算
                 * @example `15`
                 */
                Days: number;
                /**
                 * Invitation ID，用来查询邀请状态的
                 * @example `12345`
                 */
                InviteId: number;
            };
        }[];
    };
}
