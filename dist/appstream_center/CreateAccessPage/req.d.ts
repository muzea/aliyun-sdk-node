export interface CreateAccessPageRequest {
    /**
     * 访问页面名称。
     * @example `实验室demo访问页`
     */
    "AccessPageName": string;
    /**
     * 项目ID。
     * @example `p-065zdecaer07h****`
     */
    "ProjectId": string;
    /**
     * 云环境ID。默认值为空。
     * @example `c-e-06gdesdaxez****`
     */
    "CloudEnvId"?: string;
    /**
     * 项目名称。默认值为空。
     * @example `实验室demo`
     */
    "ProjectName"?: string;
    /**
     * 有效时间。
     * @example `7`
     */
    "EffectTime"?: number;
    /**
     * 有效时间单位的可选项。
     * @example `Day`
     */
    "Unit"?: string;
}
