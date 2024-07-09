export interface DescribeStacksResponse {
    /**
     * 查询结果总数
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID
     * @example `E95B3D91-ED61-4715-AAD1-7E496A*****6`
     */
    RequestId: string;
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 查询页面大小
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询页面数量
     * @example `1`
     */
    PageNumber: number;
    Stacks: {
        /**
         * 技术栈查询结果列表
         */
        Stack: {
            /**
             * 最后更新时间
             * @example `1553218065000`
             */
            UpdateTime: number;
            /**
             *
             * @example `ws-6c937c98a9c0296d0c48*****`
             */
            StackId: string;
            /**
             * 技术栈创建时间
             * @example `1553218065000`
             */
            CreateTime: number;
            /**
             *
             * @example `true`
             */
            RecommendedStack: boolean;
            /**
             *
             * @example `Java 8 / Aliyun Linux 2.1903`
             */
            StackName: string;
            /**
             *
             * @example `Java`
             */
            CategoryName: string;
            /**
             * 最后更新者
             * @example `10`
             */
            VersionCode: number;
            /**
             *
             * @example `true`
             */
            LatestStack: boolean;
        }[];
    };
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
