export interface CopyAntChainContractProjectResponse {
    /**
     * 请求ID
     * @example `45D67F6F-C723-4AD8-8462-F94EE5FF22E6`
     */
    RequestId: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 更新时间
         * @example `1563953475248`
         */
        UpdateTime: number;
        /**
         * 联盟ID
         * @example `DV80nJXq`
         */
        ConsortiumId: string;
        /**
         * 创建时间
         * @example `1563953475248`
         */
        CreateTime: number;
        /**
         * 工程ID
         * @example `R6XMEdXe`
         */
        ProjectId: string;
        /**
         * 工程名称
         * @example `copyproject`
         */
        ProjectName: string;
        /**
         * 工程版本
         * @example `v1.0.1`
         */
        ProjectVersion: string;
        /**
         * 工程描述
         * @example `copy project description`
         */
        ProjectDescription: string;
    };
}
