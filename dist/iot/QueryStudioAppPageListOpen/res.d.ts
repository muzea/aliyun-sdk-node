export interface QueryStudioAppPageListOpenResponse {
    /**
     * 调用失败时，返回的错误码。错误码详情，请参见[错误码](~~202245~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 应用页面列表信息。
     */
    Data: {
        /**
         * 指定从返回结果中的第几页开始显示。
         * @example `1`
         */
        PageNo: number;
        /**
         * 分页总数。
         * @example `1`
         */
        TotalPage: number;
        /**
         * 每页显示的条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 页面总数。
         * @example `1`
         */
        Total: number;
        List: {
            /**
             * 应用页面列表。
             */
            PageInfo: {
                /**
                 * 页面的创建时间。
                 * @example `2020-12-25T16:21Z`
                 */
                GmtCreate: string;
                /**
                 * 表示页面是否为登录页。
                 * - **0**：否。
                 * - **1**：是。
                 * @example `1`
                 */
                IsLoginPage: number;
                /**
                 * 页面路径。
                 * @example `/page/44920`
                 */
                Path: string;
                /**
                 * 表示页面是否隐藏。
                 * - **0**：否。
                 * - **1**：是。
                 * @example `1`
                 */
                IsHidden: number;
                /**
                 * 页面的修改时间。
                 * @example `2021-05-08T17:18Z`
                 */
                GmtModified: string;
                /**
                 * 页面名称。
                 * @example `test1`
                 */
                Name: string;
                /**
                 * 页面ID。
                 * @example `44920`
                 */
                PageId: string;
                /**
                 * 表示页面是否为主页。
                 * - **0**：否。
                 * - **1**：是。
                 * @example `1`
                 */
                IsHome: number;
                /**
                 * 标记每条记录的唯一标识。
                 * @example `49739`
                 */
                Id: number;
            }[];
        };
    };
}
