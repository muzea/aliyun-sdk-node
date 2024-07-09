export interface ListFunctionLogResponse {
    /**
     * 请求ID。
     * @example `C293BB03-B6AD-46C2-80D1-19C8FB573916`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    Paginator: {
        /**
         * 页码。
         * @example `1`
         */
        PageNum: number;
        /**
         * 页大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总数。
         * @example `1`
         */
        Total: number;
        /**
         * 当前页面总数。
         * @example `1`
         */
        PageCount: number;
    };
    /**
     * 函数数据列表。
     */
    DataList: {
        /**
         * 函数运行状态。
         * @example `SUCCESS`
         */
        Status: string;
        /**
         * 服务空间ID。
         * @example `dece4ea0-d432-4cfa-8514-8a88d205e2b8`
         */
        SpaceId: string;
        /**
         * 函数运行时请求ID。
         * @example `C293BB03-B6AD-46C2-80D1-19C8FB573916`
         */
        RequestId: string;
        /**
         * 函数名称。
         * @example `demoFunction`
         */
        FunctionName: string;
        /**
         * 时间。
         */
        Timestamps: string[];
        /**
         * 内容。
         */
        Contents: string[];
        /**
         * 等级。
         */
        Levels: string[];
    }[];
}
