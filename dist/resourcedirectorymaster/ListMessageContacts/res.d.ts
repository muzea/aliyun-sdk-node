export interface ListMessageContactsResponse {
    /**
     * 请求ID。
     * @example `95060F1D-6990-4645-8920-A81D1BBFE992`
     */
    RequestId: string;
    /**
     * 数据总条数。
     * @example `20`
     */
    TotalCount: number;
    /**
     * 分页时每页显示的数据条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 消息联系人列表。
     */
    Contacts: {
        /**
         * 联系人ID。
         * @example `c-qL4HqKONzOM7****`
         */
        ContactId: string;
        /**
         * 联系人的名称。
         * @example `tom`
         */
        Name: string;
        /**
         * 联系人的邮箱地址。
         * @example `someone***@example.com`
         */
        EmailAddress: string;
        /**
         * 联系人的手机号码。
         * @example `86-139****1234`
         */
        PhoneNumber: string;
        /**
         * 联系人的职位。
         * @example `TechnicalDirector`
         */
        Title: string;
        /**
         * 联系人接收的消息分类。
         */
        MessageTypes: string[];
        /**
         * 绑定目标。
         */
        Members: string[];
        /**
         * 联系人状态。取值：
         * - Verifying：待验证。
         * - Active：生效。
         * - Deleting：删除中。
         * @example `Active`
         */
        Status: string;
        /**
         * 添加联系人的时间。
         * @example `2023-03-27 17:19:21`
         */
        CreateDate: string;
        /**
         * 绑定联系人的时间。
         * @example `2023-03-27 17:19:21`
         */
        AssociatedDate: string;
    }[];
}
