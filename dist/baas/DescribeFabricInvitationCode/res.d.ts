export interface DescribeFabricInvitationCodeResponse {
    /**
     * 错误消息
     * @example `The invitation code could not found.`
     */
    DynamicMessage: string;
    /**
     * 请求ID
     * @example `77E25463-56CB-4F1C-8EB6-8ADDFE39EF0F`
     */
    RequestId: string;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: number;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误代码
     * @example `InvitationCodeNotFound`
     */
    DynamicCode: string;
    /**
     * 结果
     */
    Result: {
        /**
         * 发送者ID
         * @example `26345345`
         */
        SenderId: number;
        /**
         * 邮箱
         * @example `abc@126.com`
         */
        Email: string;
        /**
         * 发送者Bid
         * @example `27534`
         */
        SenderBid: string;
        /**
         * 过期时间
         * @example `1544411108000`
         */
        ExpireTime: string;
        /**
         * 联盟ID
         * @example `consortium-lianmenyumingyi-hc5d1bwl****`
         */
        ConsortiumId: string;
        /**
         * 邀请ID
         * @example `2`
         */
        InvitationId: number;
        /**
         * 发送者
         * @example `uid-35324`
         */
        SenderName: string;
        /**
         * 邀请码
         * @example `code`
         */
        Code: string;
        /**
         * 邀请链接
         * @example `http://baas.console.aliyun.test/invite?code=92e7ef1934892`
         */
        Url: string;
        /**
         * 是否接受
         * @example `true`
         */
        Accepted: boolean;
        /**
         * 发送时间
         * @example `1544411108000`
         */
        SendTime: string;
    };
}
