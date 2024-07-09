export interface QueryFaceImageTemplateRequest {
    /**
     * 待查询的模板ID。如果未传TemplateId，返回该用户的模板列表；如果传入TemplateId，仅返回对应的结果。
     * @example `6cd509ea-54fa-4730-8e9d-c94cadcda048`
     */
    "TemplateId"?: string;
    /**
     * 当前页数设置，默认第1页。取值范围为1~5000。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 当前页条数设置，默认100条。取值范围为1~500。
     * @example `100`
     */
    "PageSize"?: number;
}
