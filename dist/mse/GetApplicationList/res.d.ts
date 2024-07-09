export interface GetApplicationListResponse {
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求id。
     * @example `F55E608F-7C15-****-9CFD-DF832EBC4A0F`
     */
    RequestId: string;
    /**
     * 数据结构。
     */
    Data: {
        /**
         * 返回集合。
         */
        Result: {
            /**
             * 状态。
             * @example `0`
             */
            Status: number;
            /**
             * 其他信息。
             * @example `{}`
             */
            ExtraInfo: string;
            /**
             * 应用名称。
             * @example `finance`
             */
            AppName: string;
            /**
             * 应用id。
             * @example `hkhon1po62@5f1b08becb*****`
             */
            AppId: string;
            /**
             * 用户ID。
             * @example `1234567890`
             */
            UserId: string;
            /**
             * 实例数量。
             * @example `1`
             */
            InstancesNumber: number;
            /**
             * 应用来源。
             * @example `edasmsc`
             */
            Source: string;
            /**
             * 应用的编程语言。
             * @example `JAVA`
             */
            Language: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 应用所属的微服务命名空间。
             * @example `default`
             */
            Namespace: string;
        }[];
        /**
         * 总条数。
         * @example `11`
         */
        TotalSize: number;
        /**
         * 当前页
         * @example `1`
         */
        PageNumber: number;
        /**
         * 页面大小。
         * @example `10`
         */
        PageSize: number;
    };
}
