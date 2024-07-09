export interface ExportInsightFieldResponse {
    /**
     * 总条数
     * @example `100`
     */
    totalCount: number;
    /**
     * 下一页token，为null表示没有下一页
     * @example `2`
     */
    nextToken: string;
    /**
     * 返回条数
     * @example `10`
     */
    maxResults: number;
    /**
     * 返回结果
     */
    result: {
        /**
         * 记录自增Id
         * @example `666666`
         */
        id: number;
        /**
         * 字段id，如自定义字段Id及标签id
         * @example `9798551`
         */
        fieldId: string;
        /**
         * 字段名称
         * @example `多选字段`
         */
        fieldName: string;
        /**
         * 创建时间
         * @example `1713752162000`
         */
        gmtCreate: number;
        /**
         * 更新时间
         * @example `1714977502000`
         */
        gmtModified: number;
        /**
         * 废弃
         * @example `field-444153`
         */
        identifier: string;
        /**
         * 是否删除(Y|N)
         * @example `N`
         */
        isDeleted: string;
        /**
         * 是否系统字段(Y|N)
         * @example `N`
         */
        isSystem: string;
        /**
         * 字段可选值列表，如枚举有可选值
         * @example `"[\"是\"]"`
         */
        optionValue: string;
        /**
         * 企业id
         * @example `61db9af2148974246bexxxx`
         */
        organizationId: string;
        /**
         * 字段适用对象id, 如项目id, 企业id
         * @example `61db9af2148974246bexxxx`
         */
        targetId: string;
        /**
         * 字段适用对象范围，如项目,企业等
         * @example `organization`
         */
        targetType: string;
        /**
         * 字段类型，如标签、枚举、文本、数值
         * @example `string`
         */
        type: string;
        /**
         * 字段顺序
         * @example `150`
         */
        position: number;
        /**
         * 字段范围，space/global/system -> 项目内/全局/系统
         * @example `global`
         */
        scope: string;
        /**
         * 字段来源系统，如projex/teambition
         * @example `projex`
         */
        source: string;
    }[];
}
