export interface DescribeContactGroupsResponse {
    /**
     * 请求ID。
     * @example `4D6C358A-A58B-4F4B-94CE-F5AAF023****`
     */
    RequestId: string;
    /**
     * 分页对象。
     */
    PageBean: {
        /**
         * 查询到的联系人组总数。
         * @example `1`
         */
        Total: number;
        /**
         * 查询的页数。
         * @example `1`
         */
        Page: number;
        /**
         * 每页的联系人组数。
         * @example `20`
         */
        Size: number;
        /**
         * 告警联系人组列表。
         */
        AlertContactGroups: {
            /**
             * 告警联系人组ID。
             * @example `123`
             */
            ContactGroupId: number;
            /**
             * 告警联系人组名称。
             * @example `TestGroup`
             */
            ContactGroupName: string;
            /**
             * 联系人信息。**IsDetail**设置为`false`时不显示**Contacts**。
             */
            Contacts: {
                /**
                 * 联系人ID。
                 * @example `456`
                 */
                ContactId: number;
                /**
                 * 联系人姓名。
                 * @example `John Doe`
                 */
                ContactName: string;
                /**
                 * 联系人手机号码。
                 * @example `1381111****`
                 */
                Phone: string;
                /**
                 * 联系人邮箱地址。
                 * @example `someone@example.com`
                 */
                Email: string;
                /**
                 * 告警联系人ID。
                 * @example `100117`
                 */
                ArmsContactId: number;
            }[];
            /**
             * 告警联系人组ID。
             * @example `83261`
             */
            ArmsContactGroupId: number;
        }[];
    };
}
