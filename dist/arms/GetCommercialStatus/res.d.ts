export interface GetCommercialStatusResponse {
    /**
     * 请求ID。
     * @example `49C82193-E991-5F6A-AF3E-1664D8******`
     */
    RequestId: string;
    /**
     * 用户商业化状态。
     */
    UserAndCommodityStatus: {
        /**
         * 商业化状态。
         * @example `Normal`
         */
        Status: string;
        /**
         * 试用期用户免费天数。
         * @example `10`
         */
        FreeDays: number;
        /**
         * 是否为基础版用户。
         * @example `false`
         */
        Basic: boolean;
        /**
         * 付费类型。
         * @example `usage`
         */
        ChargeType: string;
        /**
         * 标签。
         * @example `NEW`
         */
        Lable: string;
        /**
         * 额外信息。
         * @example `info`
         */
        ExtraInfo: any;
        /**
         * 是否开通。
         * @example `true`
         */
        Enable: boolean;
    };
}
