export interface ListAgentResponse {
    /**
     * Id of the request
     * @example `F55D90C1-31BE-4B2A-AA3F-25EFC36F9419`
     */
    RequestId: string;
    /**
     * 当前⻚，默认1
     * @example `1`
     */
    PageNumber: number;
    /**
     * 返回结果中每页显示的记录数量。最大取值100，默认值是10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总条数
     * @example `6`
     */
    TotalCount: number;
    /**
     * 业务空间列表
     */
    Data: {
        /**
         * 业务空间ID
         * @example `881`
         */
        AgentId: number;
        /**
         * 业务空间签名，用于PAAS接口指定业务空间时使用
         * @example `4e7400028e6f4a7393ed3acf6a7b8927_p_beebot_public`
         */
        AgentKey: string;
        /**
         * 业务空间名称
         * @example `业务空间_881`
         */
        AgentName: string;
        /**
         * 商品实例信息
         */
        InstanceInfos: any;
    }[];
}
