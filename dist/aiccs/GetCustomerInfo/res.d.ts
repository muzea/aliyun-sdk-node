export interface GetCustomerInfoResponse {
    /**
     * 请求ID。
     * @example `DF6A3FB7-A5AA-43BE-A65B`
     */
    RequestId: string;
    /**
     * 状态码描述。
     * @example `successful`
     */
    Message: string;
    /**
     * 状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 接口调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 会员信息。
     */
    Data: {
        /**
         * 昵称。
         * @example `测试会员`
         */
        Nick: string;
        /**
         * 头像。
         * @example `https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLSW7XPFlJDwVunXP8pr84TvltwtLlNqTlOVSFeM3bCgn57mAB4JuZZmvMW0qicqW0PyzyUdZpxiaFQ`
         */
        Photo: string;
        /**
         * 会员ID。
         * @example `823456789023`
         */
        UserId: number;
        /**
         * 真实姓名。
         * @example `刘测试`
         */
        RealName: string;
        /**
         * 外部ID。
         * @example `6666666`
         */
        OuterId: string;
        /**
         * 自定义字段。
         */
        CustomizeFields: any;
    };
}
