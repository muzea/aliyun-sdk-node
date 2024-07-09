export interface ListCouponUsageResponse {
    /**
     * 接口状态码
     * @example `200`
     */
    Code: string;
    /**
     * 接口返回提示信息
     * @example `成功`
     */
    Message: string;
    /**
     * 接口请求id返回问题提供查询使用
     * @example `9C14ADFE-DF0A-54D4-8BD5-45D0839246B4`
     */
    RequestId: string;
    /**
     * 分页信息
     */
    PageInfo: {
        /**
         * 分页，当前页
         * @example `1`
         */
        Page: number;
        /**
         * 分页，每页数量
         * @example `20`
         */
        PageSize: number;
        /**
         * 分页，总量
         * @example `300`
         */
        Total: number;
    };
    /**
     * 返回数据
     */
    Data: {
        /**
         * 优惠券模版id
         * @example `503802`
         */
        CouponTemplateId: number;
        /**
         * 优惠券id
         * @example `59226280`
         */
        CouponId: string;
        /**
         * 优惠券面额
         * @example `200`
         */
        Amount: number;
        /**
         * 余额
         * @example `0.01`
         */
        Balance: number;
        /**
         * 优惠券有效期
         * @example `2023-04-06 00:00:00 ~ 2023-04-07 00:00:00`
         */
        EffDate: string;
        /**
         * 优惠券状态 </br>
         * AVAILABLE 正常 </br>
         * EXHAUSTED 已用完 </br>
         * EXPIRED 已过期 </br>
         * ABANDONED 已作废 </br>
         * @example `AVAILABLE`
         */
        Status: string;
        /**
         * 阿里云账号
         * @example `oqevfbveuadcrduzmf@ttirv.net`
         */
        Account: string;
        /**
         * 优惠券发放时间
         * @example `2023-04-06 19:32:10
        `
         */
        PublishDate: string;
        /**
         * 阿里云uid
         * @example `1647668856741998`
         */
        Uid: number;
    }[];
}
