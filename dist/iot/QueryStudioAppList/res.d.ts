export interface QueryStudioAppListResponse {
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
     * 应用列表详情。
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
         * 应用总数。
         * @example `200`
         */
        Total: number;
        List: {
            /**
             * 应用列表。
             */
            AppInfo: {
                /**
                 * 应用类型。
                 * @example `webApp`
                 */
                Type: string;
                /**
                 * 应用密钥。
                 * @example `a605*******`
                 */
                AppSecret: string;
                /**
                 * 应用**AppKey**。
                 * @example `322******`
                 */
                AppKey: string;
                /**
                 * 应用描述。
                 * @example `This is a test.`
                 */
                Description: string;
                /**
                 * 应用ID。
                 * @example `a123********`
                 */
                AppId: string;
                /**
                 * 应用所属项目ID。
                 * @example `a123********`
                 */
                ProjectId: string;
                /**
                 * 应用的创建时间。
                 * @example `2020-12-25 16:20:53`
                 */
                GmtCreate: string;
                /**
                 * 应用的发布时间。
                 * @example `2021-04-15 19:11:32`
                 */
                GmtRelease: string;
                /**
                 * 应用的修改时间。
                 * @example `2021-04-10 15:06:23`
                 */
                GmtModified: string;
                /**
                 * 应用名称。
                 * @example `test1`
                 */
                Name: string;
            }[];
        };
    };
}
