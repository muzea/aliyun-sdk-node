export interface DescribeAntChainContractProjectContentTreeResponse {
    /**
     * 请求ID
     * @example `A0DF307A-A44A-476F-99D8-BA4F205350BD`
     */
    RequestId: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 工程版本
         * @example `5`
         */
        ProjectVersion: string;
        /**
         * 工程描述
         * @example `description`
         */
        ProjectDescription: string;
        /**
         * 工程ID
         * @example `2L9VK68g`
         */
        ProjectId: string;
        /**
         * 工程名称
         * @example `projectname`
         */
        ProjectName: string;
        Children: any[];
    };
}
