export interface GetAccountForAppResponse {
    /**
     * 返回的错误码，`0`表示成功。
     * @example `0`
     */
    RetCode: number;
    /**
     * 返回的错误信息，成功则不返回信息。
     * @example `请求异常`
     */
    RetMsg: string;
    /**
     * 返回的结果对象列表。
     */
    RetValue: {
        /**
         * 是否为授权会员。
         * @example `true`
         */
        IsVip: boolean;
        /**
         * 毫秒级时间戳
         * - 若开通过会员，返回会员失效时间。
         * - 若从未开通过会员，返回值固定为`0`。
         * @example `1652340138347`
         */
        VipExpireAt: number;
        /**
         * 会员的到期时间。
         * @example `2022-05-12 15:22:18`
         */
        StrVipExpire: string;
    };
}
