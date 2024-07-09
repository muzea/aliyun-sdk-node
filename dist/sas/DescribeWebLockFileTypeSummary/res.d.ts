export interface DescribeWebLockFileTypeSummaryResponse {
    /**
     * 查询到的网页防篡改事件的总数量。
     * @example `639`
     */
    TotalCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `4BB99533-4FDC-5B9C-A5E4-5AE3E9BE5C78`
     */
    RequestId: string;
    /**
     * 网页防篡改事件列表。
     */
    List: {
        /**
         * 防护文件的类型。
         * - **php**：.php文件
         * - **jsp**： .jsp文件
         * - **asp**：.asp文件
         * - **aspx** .aspx文件
         * - **js**：   .js文件
         * - **cgi**： .cgi文件
         * - **html**  .html文件
         * - **htm**：.htm文件
         * - **xml**：.xml文件
         * - **shtml**：.shtml文件
         * - **shtm**：.shtm文件
         * - **jpg**：.jpg文件
         * - **gif**：.gif文件
         * - **png**：.png文件
         * @example `jsp`
         */
        Type: string;
        /**
         * 尝试次数。
         * @example `3`
         */
        Count: number;
    }[];
}
