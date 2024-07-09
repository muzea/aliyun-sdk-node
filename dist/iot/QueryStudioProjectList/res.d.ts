export interface QueryStudioProjectListResponse {
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
     * 项目列表详情。
     */
    Data: {
        /**
         * 指定从返回结果中的第几页开始显示。
         * @example `1`
         */
        PageNo: number;
        /**
         * 分页总数。
         * @example `10`
         */
        TotalPage: number;
        /**
         * 每页显示的条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 项目总数。
         * @example `200`
         */
        Total: number;
        List: {
            /**
             * 项目列表。
             */
            ProjectInfo: {
                /**
                 * 项目的创建时间。毫秒值时间戳。
                 * @example `1611819839000`
                 */
                GmtCreate: number;
                /**
                 * 项目描述。
                 * @example `This is a test project.`
                 */
                Description: string;
                /**
                 * 项目名称。
                 * @example `test1`
                 */
                Name: string;
                /**
                 * 项目的修改时间。毫秒值时间戳。
                 * @example `1611819860000`
                 */
                GmtModified: number;
                /**
                 * 项目ID。
                 * @example `a123********`
                 */
                ProjectId: string;
            }[];
        };
    };
}
