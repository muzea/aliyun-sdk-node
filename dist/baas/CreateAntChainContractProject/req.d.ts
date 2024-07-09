export interface CreateAntChainContractProjectRequest {
    /**
     * 联盟ID
     * @example `DV80nJXq`
     */
    "ConsortiumId": string;
    /**
     * 项目名称，只能由英文大小写、数字、常用汉字和短划线（-）的自由组合，不能有小数点、空格等特殊字符，限制在1~30个字符。
     * @example `projectname`
     */
    "ProjectName": string;
    /**
     * 项目版本
     * @example `v1.0.0`
     */
    "ProjectVersion": string;
    /**
     * 工程描述
     * @example `project description`
     */
    "ProjectDescription"?: string;
}
