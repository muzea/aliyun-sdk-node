export interface UpdateCampaignRequest {
    /**
     * 运营活动ID，可通过ListCampaigns查询账号下的运营活动列表，获取运营活动ID。
     * @example `996e466b-6808-49c7-998c-47b57bb85dd4`
     */
    "Id"?: string;
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
