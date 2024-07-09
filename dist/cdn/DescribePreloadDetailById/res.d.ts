export interface DescribePreloadDetailByIdResponse {
    /**
     * 查询到的总任务数
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `E9D3257A-1B7C-414C-90C1-8D07AC47BCAC`
     */
    RequestId: string;
    /**
     * 任务详情。包括任务ID、起止时间、域名、成功率、状态、返回错误码、以及所有url资源的完成详情。
     */
    UrlDetails: {
        /**
         * 待查询的任务ID。
         * 您可以调用PushObjectCache接口，从其返回值中获取预热任务的ID，并通过任务ID查询源站资源的预热状态。
         * 支持同时传入单个任务ID。
         * @example `14286878547`
         */
        TaskId: string;
        /**
         * 预热资源的域名
         * @example `example.com`
         */
        Domain: string;
        /**
         * 任务对象创建时间，使用UTC时间表示。
         * @example `2022-11-23T02:26:56Z`
         */
        CreationTime: string;
        /**
         * 任务对象结束时间，使用UTC时间表示。
         * @example `2022-11-23T02:27:00Z`
         */
        EndTime: string;
        /**
         * 返回的错误码，`0`表示成功。
         * @example `0`
         */
        RetCode: string;
        /**
         * 任务完成进度百分比，代表预热任务在多少边缘节点上已结束。
         * @example `100%`
         */
        Process: string;
        /**
         * 任务状态。取值：
         * - **Complete**：完成。
         * - **Refreshing**：进行中。
         * - **Failed**：任务失败。
         * @example `Complete`
         */
        Status: string;
        /**
         * 该任务下所有url资源的完成详情。
         */
        Urls: {
            /**
             * 预热资源的url。
             * @example `/abc.jpg
            `
             */
            Url: string;
            /**
             * 成功百分比。表示该资源在多少边缘节点上预热成功。
             * @example `47%`
             */
            Success: string;
            /**
             * 资源预热详情。
             * - 若全部边缘节点成功，则返回"Successfully preloaded"
             * - 若存在边缘节点失败，则返回失败详情，用"|"分隔。
             * @example `Successfully preloaded`
             */
            Description: string;
        }[];
    }[];
}
