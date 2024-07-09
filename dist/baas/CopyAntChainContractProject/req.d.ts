export interface CopyAntChainContractProjectRequest {
    /**
     * 工程ID
     * @example `2L9VK68g`
     */
    "ProjectId": string;
    /**
     * 工程名
     * @example `copyproject`
     */
    "ProjectName": string;
    /**
     * 工程版本
     * @example `v1.0.1`
     */
    "ProjectVersion": string;
    /**
     * 工程描述
     * @example `copy project description`
     */
    "ProjectDescription"?: string;
}
