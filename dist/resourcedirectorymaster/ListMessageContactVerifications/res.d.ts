export interface ListMessageContactVerificationsResponse {
    /**
     * 请求ID。
     * @example `CD76D376-2517-4924-92C5-DBC52262F93A`
     */
    RequestId: string;
    /**
     * 数据总条数。
     * @example `48`
     */
    TotalCount: number;
    /**
     * 分页时每页显示的数据行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 联系人待验证记录。
     */
    ContactVerifications: {
        /**
         * 联系人ID。
         * @example `c-qL4HqKONzOM7****`
         */
        ContactId: string;
        /**
         * 验证目标。取值：
         * - 手机号码。
         * - 邮箱。
         * @example `someone***@example.com`
         */
        Target: string;
    }[];
}
