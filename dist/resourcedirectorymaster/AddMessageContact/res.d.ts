export interface AddMessageContactResponse {
    /**
     * 请求ID。
     * @example `2DFCE4C9-04A9-4C83-BB14-FE791275EC53`
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
         * 联系人创建时间。
         * @example `2023-03-27 17:19:21`
         */
        CreateDate: string;
    };
}
