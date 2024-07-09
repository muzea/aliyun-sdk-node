export interface LogVMDeployMachineRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 流水线ID，可在流水线链接中获取，如https://flow.aliyun.com/pipelines/【PipelineId】/current
     * @example `1111`
     */
    "pipelineId": number;
    /**
     * 部署单ID
     * @example `1111`
     */
    "deployOrderId": number;
    /**
     * 机器SN
     * @example `sasassasa`
     */
    "machineSn": string;
}
