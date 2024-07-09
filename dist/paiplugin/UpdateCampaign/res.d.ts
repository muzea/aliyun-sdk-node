export interface UpdateCampaignResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 创建时间 (UTC+8)。
         * @example `2020-01-01 12:00:00`
         */
        CreatedTime: string;
        /**
         * 运营活动ID。
         * @example `0a54e195-03e2-40bd-869d-b71cb302783e`
         */
        Id: string;
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
        /**
         * 更新时间 (UTC+8)。
         * @example `2020-01-01 12:00:00`
         */
        UpdatedTime: string;
    };
    /**
     * 错误码。
     * @example `0`
     */
    ErrorCode: number;
    /**
     * 错误信息。
     * @example `OK`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `f8651828-609d-4de8-ab49-ab781d7fd85a`
     */
    RequestId: string;
}
