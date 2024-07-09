export interface UpdateSolutionRequest {
    /**
     * 答案ID
     * @example `100001333260`
     */
    "SolutionId": number;
    /**
     * 答案内容
     * @example `修改的答案内容`
     */
    "Content": string;
    /**
     * 答案类型：0-纯文本，1-富文本
     * @example `1`
     */
    "ContentType"?: number;
    /**
     * 视角code列表
     */
    "PerspectiveCodes": string[];
    /**
     * 业务空间key，不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
}
