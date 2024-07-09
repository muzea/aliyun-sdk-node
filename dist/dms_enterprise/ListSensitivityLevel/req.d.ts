export interface ListSensitivityLevelRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `20***`
     */
    "Tid"?: number;
    /**
     * 分类分级模板ID。您可以调用[ListClassificationTemplates](~~460613~~)接口获取该参数的值。
     * @example `15**`
     */
    "TemplateId"?: number;
    /**
     * 分类分级模板类型。您可以调用[ListClassificationTemplates](~~460613~~)接口获取该参数的值。
     * @example `INNER`
     */
    "TemplateType"?: string;
}
