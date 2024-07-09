export interface QueryFaceVideoTemplateRequest {
    /**
     * 待查询的模板ID。如果未传TemplateId，返回该用户的模板列表；如果传入TemplateId，仅返回对应的结果。
     * @example `3bf2418c-7adf-4002-a9d6-2f7cf1889c0d`
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
