export interface GetTemplateRequest {
    /**
     * 模板Id
     * @example `****20b48fb04483915d4f2cd8ac****`
     */
    "TemplateId"?: string;
    /**
     * 相关媒体ID标记，默认值0，当值为1时返回模板关联素材，仅普通模板有效。
     * @example `0`
     */
    "RelatedMediaidFlag"?: string;
}
