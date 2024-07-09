export interface ListAccountFactoryBaselinesResponse {
    /**
     * 查询返回结果下一页的令牌。
     * @example `AAAAALHWGpGoYCcYMxiFfmlhvh62Xr2DzYbz/SAfc*****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `3245E413-7CDD-5287-8988-6A94DE8A8369`
     */
    RequestId: string;
    /**
     * 基线列表。
     */
    Baselines: {
        /**
         * 基线ID。
         * @example `afb-bp1durvn3lgqe28v****`
         */
        BaselineId: string;
        /**
         * 基线名称。
         * @example `Default`
         */
        BaselineName: string;
        /**
         * 创建时间。
         * @example `2021-11-30T09:09:28Z`
         */
        CreateTime: string;
        /**
         * 更新时间。
         * @example `2022-12-29T07:08:40Z`
         */
        UpdateTime: string;
        /**
         * 基线描述。
         * @example `默认基线`
         */
        Description: string;
        /**
         * 基线类型。取值：
         * - System：系统默认基线。
         * - Custom：用户自定义基线。
         * @example `Custom`
         */
        Type: string;
    }[];
}
