export interface CreateCampaignRequest {
    /**
     * 请求参数的主体信息。
     */
    "body"?: {
        /**
         * 运营活动名称。
         * @example `VIP客户`
         */
        Name: string;
        /**
         * 备注。
         * @example `双十一活动`
         */
        Remark: string;
    };
}
