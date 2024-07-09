export interface DescribePurchasedApiGroupResponse {
    /**
     * 分组状态
     * - **NORMAL**：正常
     * - **DELETE**：删除
     * @example `NORMAL`
     */
    Status: string;
    /**
     * 购买时间
     * @example `2021-12-19T00:00:00`
     */
    PurchasedTime: string;
    /**
     * 本次请求的ID。
     * @example `61A16D46-EC04-5288-8A18-811B0F536CC2`
     */
    RequestId: string;
    /**
     * api分组id
     * @example `48977d7b96074966a7c9c2a8872d7e06`
     */
    GroupId: string;
    /**
     * API分组名称
     * @example `Weather`
     */
    GroupName: string;
    /**
     * api分组描述
     * @example `api group description`
     */
    Description: string;
    /**
     * api分组所在区域
     * @example `cn-qingdao`
     */
    RegionId: string;
    Domains: {
        /**
         * 域名列表。
         */
        DomainItem: {
            /**
             * 域名
             * @example `test_domain.com`
             */
            DomainName: string;
        }[];
    };
}
