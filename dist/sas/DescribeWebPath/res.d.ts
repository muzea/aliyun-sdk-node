export interface DescribeWebPathResponse {
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 分页查询时，显示每页数据的最大条数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `B37C9052-A73E-4707-A024-92477028****`
     */
    RequestId: string;
    /**
     * 查询到的数据总条数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 当前页显示的数据条数。
     * @example `2`
     */
    Count: number;
    /**
     * web路径列表。
     */
    ConfigList: {
        /**
         * web目录。
         * @example `/root/www****`
         */
        WebPath: string;
        /**
         * web路径类型。取值：
         * - **def**：系统自动识别
         * - **customize**：手动添加
         * @example `def`
         */
        WebPathType: string;
        /**
         * web目录生效的服务器列表。
         */
        TargetList: {
            /**
             * 目标对象。
             * @example `82048187-bb9b-4e19-8320-7b4ddb97****`
             */
            Target: string;
            /**
             * 目标类型。取值：
             * - **uuid**
             * @example `uuid`
             */
            TargetType: string;
        }[];
    }[];
}
