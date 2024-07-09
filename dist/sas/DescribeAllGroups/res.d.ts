export interface DescribeAllGroupsResponse {
    /**
     * 服务器分组的总数量。
     * @example `2`
     */
    Count: number;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `7E0618A9-D5EF-4220-9471-C42B5E92719F`
     */
    RequestId: string;
    /**
     * 服务器分组信息。
     */
    Groups: {
        /**
         * 服务器分组名称。
         * @example `abc`
         */
        GroupName: string;
        /**
         * 服务器分组ID。
         * @example `8834224`
         */
        GroupId: number;
        /**
         * 服务器分组类型。取值：
         * - **0**：默认分组
         * - **1**：其他分组
         * @example `1`
         */
        GroupFlag: number;
    }[];
}
