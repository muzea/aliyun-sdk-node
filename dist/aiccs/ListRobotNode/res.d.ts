export interface ListRobotNodeResponse {
    /**
     * 请求ID。
     * @example `D9CB3933-9FE3-4870-BA8E-2BEE91B69D23`
     */
    RequestId: string;
    /**
     * 机器人节点列表。
     */
    Data: {
        /**
         * 流程名称。
         * @example `开场白`
         */
        ProcessName: string;
        /**
         * 模型名称。
         * @example `模型一`
         */
        ModelName: string;
        /**
         * 节点名称。
         * @example `理财`
         */
        NodeName: string;
        /**
         * 是否输出。取值：
         * - **1**：是。
         * - **0**：否。
         * @example `1`
         */
        IsOutput: number;
        /**
         * 输出ID。
         * @example `12****`
         */
        NodeIdentifier: string;
    }[];
    /**
     * 请求状态码。返回OK代表请求成功。
     * @example `Ok`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `Ok`
     */
    Message: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
}
