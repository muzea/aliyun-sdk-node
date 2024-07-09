export interface CreateAntChainContractProjectResponse {
    /**
     * 请求ID
     * @example `4261A4C3-B8B5-4555-AEBC-944C3EAB23DB`
     */
    RequestId: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 更新时间
         * @example `1563951889140`
         */
        UpdateTime: number;
        /**
         * 联盟ID
         * @example `DV80nJXq`
         */
        ConsortiumId: string;
        /**
         * 创建时间
         * @example `1563951889044`
         */
        CreateTime: number;
        /**
         * 工程ID
         * @example `R38DAbop`
         */
        ProjectId: string;
        /**
         * 工程名称
         * @example `projectname`
         */
        ProjectName: string;
        /**
         * 工程版本
         * @example `v1.0.0`
         */
        ProjectVersion: string;
        /**
         * 工程描述
         * @example `project description`
         */
        ProjectDescription: string;
    };
}
