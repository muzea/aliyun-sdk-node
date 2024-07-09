export interface DescribeFabricInviterResponse {
    /**
     * 请求ID
     * @example `C445762C-8909-4BD8-A2BD-BB45BF2441D8`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: number;
    /**
     * 邀请人信息列表
     */
    Result: {
        /**
         * 邀请者ID
         * @example `3524234`
         */
        InviterId: number;
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
         * 联盟名称
         * @example `name`
         */
        ConsortiumName: string;
        /**
         * 邀请者
         * @example `name`
         */
        InviterName: string;
    };
}
