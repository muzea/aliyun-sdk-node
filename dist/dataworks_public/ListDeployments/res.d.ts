export interface ListDeploymentsResponse {
    /**
     * 请求ID。用于出现错误后排查问题。
     * @example `0000-ABCD-EFG`
     */
    RequestId: string;
    /**
     * 满足查询条件的发布包列表数据。
     */
    Data: {
        /**
         * 请求的数据页数，用于翻页。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页显示的数据条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 满足条件的数据总条数。
         * @example `13`
         */
        TotalCount: number;
        /**
         * 返回的发布包列表。
         */
        Deployments: {
            /**
             * 发布包当前的状态。取值如下：
             * - 0：发布包已准备就绪。
             * - 1：发布包发布成功。
             * - 2：发布包发布失败。
             * - 6：发布包被驳回。
             * @example `1`
             */
            Status: number;
            /**
             * 当发布包执行失败，该参数用于记录错误信息。
             * @example `OK`
             */
            ErrorMessage: string;
            /**
             * 发布包创建的时间戳。
             * @example `1593877765000`
             */
            CreateTime: number;
            /**
             * 发布包执行者的阿里云用户ID。
             * @example `2003****`
             */
            Executor: string;
            /**
             * 发布包创建者的阿里云用户ID。
             * @example `2003****`
             */
            Creator: string;
            /**
             * 执行发布包的时间戳。
             * @example `1593877765000`
             */
            ExecuteTime: number;
            /**
             * 发布包的名称。
             * @example `auto_created`
             */
            Name: string;
            /**
             * 发布包的ID，您可以根据此ID调用[GetDeployment](~~173950~~)接口，获取发布包详情。
             * @example `11111`
             */
            Id: number;
        }[];
    };
}
