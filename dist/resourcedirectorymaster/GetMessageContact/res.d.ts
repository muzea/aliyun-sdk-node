export interface GetMessageContactResponse {
    /**
     * 请求ID。
     * @example `9B34724D-54B0-4A51-B34D-4512372FE1BE`
     */
    RequestId: string;
    /**
     * 联系人信息。
     */
    Contact: {
        /**
         * 联系人ID。
         * @example `c-qL4HqKONzOM7****`
         */
        ContactId: string;
        /**
         * 联系人接收的消息分类。
         */
        MessageTypes: string[];
        /**
         * 联系人的创建时间。
         * @example `2023-03-27 17:19:21`
         */
        CreateDate: string;
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
         * 绑定目标。
         */
        Members: string[];
        /**
         * 联系人状态。取值：
         * - Verifying：待验证。
         * - Active：已生效。
         * - Deleting：删除中。
         * @example `Active`
         */
        Status: string;
    };
}
