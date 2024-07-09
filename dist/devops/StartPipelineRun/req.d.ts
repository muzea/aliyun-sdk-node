export interface StartPipelineRunRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 流水线ID，可在流水线链接中获取，如https://flow.aliyun.com/pipelines/【PipelineId】/current
     * 5ebbc0228123212b59xxxxx
     * @example `123`
     */
    "pipelineId": number;
    /**
     * 流水线运行参数
     * 分支模式运行分支
     * envs 运行变量
     * runningBranchs 运行分支 key 为仓库地址
     * runningTags 运行tag  key 为仓库地址
     * runningPipelineArtifacts key为flow类型的制品源地址
     * runningAcrArtifacts key为acr类型的制品源地址
     * runningPackagesArtifacts key为package类型的制品源地址
     * @example `{
        "branchModeBranchs": ["branch1", "branch2"],
        "envs": {
            "k1": "v1",
            "k2": "v2",
            "k3": "v3"
        },
        "runningBranchs": {
            "https://codeup.aliyun.com/60c1abb32c5969c370c5fcd0/Codeup-Demo.git": "master1"
        },
        "runningTags": {
            "https://codeup.aliyun.com/60c1abb32c5969c370c5fcd0/Codeup-Demo.git": "1.0"
        },
        "runningPipelineArtifacts": {
            "3184679": "12"
        },
        "runningAcrArtifacts": {
            "yunxiao-registry.cn-beijing.cr.aliyuncs.com/build-steps/tool-registry": "89b20155-2024-05-14-21-52-44"
        },
        "runningPackagesArtifacts": {
            "generic/flow_generic_repo/Artifacts_3183732": "2024-06-04-17-58-34"
        }
    }`
     */
    "params"?: string;
}
