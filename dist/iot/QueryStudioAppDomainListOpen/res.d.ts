export interface QueryStudioAppDomainListOpenResponse {
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
     * 应用绑定域名列表信息。
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
         * 域名总数。
         * @example `1`
         */
        Total: number;
        List: {
            /**
             * 应用绑定域名列表。
             */
            DomainInfo: {
                /**
                 * 域名。
                 * @example `example.com`
                 */
                Host: string;
                /**
                 * 请求协议。
                 * @example `https`
                 */
                Protocol: string;
                /**
                 * 应用ID。
                 * @example `a12*******`
                 */
                AppId: string;
                /**
                 * 项目ID。
                 * @example `a123********`
                 */
                ProjectId: string;
                /**
                 * 应用绑定域名的时间。
                 * @example `1619598445000`
                 */
                GmtCreate: string;
                /**
                 * 域名是否已备案。
                 * - **YES**：是。
                 * - **NO**：否。
                 * @example `YES`
                 */
                IsBeian: string;
                /**
                 * 应用修改域名的时间。
                 * @example `1619598445000`
                 */
                GmtModified: string;
                /**
                 * 域名ID。
                 * @example `1548`
                 */
                Id: number;
                /**
                 * 租户ID。
                 * @example `C70B541046F64EAAB*********`
                 */
                TenantId: string;
            }[];
        };
    };
}
