export interface GetTemplateCategoriesRequest {
    /**
     * 父类目id
     * @example `pc-2ze6x04o5eu444ceg`
     */
    "ParentId": number;
    /**
     * SCU的状态。
     * @example `True`
     */
    "Status"?: string;
    /**
     * 是否递归查询模板类型，默认为false
     * @example `true`
     */
    "Recursive"?: boolean;
}
