export interface DescribeContactsResponse {
    /**
     * 请求ID。
     * @example `21E85B16-75A6-429A-9F65-8AAC9A54****`
     */
    RequestId: string;
    /**
     * 分页对象。
     */
    PageBean: {
        /**
         * 查询到的联系人总数。
         * @example `1`
         */
        Total: number;
        /**
         * 查询的页数。
         * @example `1`
         */
        Page: number;
        /**
         * 每页的联系人数。
         * @example `20`
         */
        Size: number;
        /**
         * 告警联系人列表。
         */
        AlertContacts: {
            /**
             * 告警联系人ID。
             * @example `123`
             */
            ContactId: number;
            /**
             * 告警联系人姓名。
             * @example `John Doe`
             */
            ContactName: string;
            /**
             * 告警联系人手机号码。
             * @example `1381111****`
             */
            Phone: string;
            /**
             * 告警联系人邮箱地址。
             * @example `someone@example.com`
             */
            Email: string;
            /**
             * 手机号码是否验证标识。
             * - `false`：未验证。
             * - `true`：已验证。
             * @example `false`
             */
            IsVerify: boolean;
            /**
             * 电话通知失败后，通知补发类型。
             * - 0：不补发
             * - 1：重复拨打一次电话
             * - 2：发送短信通知
             * - 3（默认）：使用全局默认值
             * @example `3`
             */
            ReissueSendNotice: number;
            /**
             * 邮箱是否已验证
             * @example `true`
             */
            IsEmailVerify: boolean;
            /**
             * 告警联系人ID。
             * @example `100147`
             */
            ArmsContactId: number;
        }[];
    };
}
