export interface ExportInsightCustomValueResponse {
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
         * @example `320737507`
         */
        id: number;
        /**
         * 字段id，如自定义字段Id及标签id
         * @example `34dde3dfa5e3750151a7c4xxxx`
         */
        fieldId: string;
        /**
         * 创建时间
         * @example `1704950971000`
         */
        gmtCreate: number;
        /**
         * 更新时间
         * @example `1714669494000`
         */
        gmtModified: number;
        /**
         * 自定义字段表关联值的唯一标识
         * @example `442d4a6a9980e841dc192a411080xxxx`
         */
        identifier: string;
        /**
         * 是否删除(Y|N)
         * @example `N`
         */
        isDeleted: string;
        /**
         * 企业id
         * @example `61db9af2148974246bexxxx`
         */
        organizationId: string;
        /**
         * 关联对象的资源id
         * @example `1ee00fcb1a18c2dc83dafdxxxx`
         */
        targetId: string;
        /**
         * 关联对象的资源类型，如workitem space code
         * @example `Workitem`
         */
        targetType: string;
        /**
         * 自定义字段值类型
         * @example `string`
         */
        type: string;
        /**
         * 值
         * @example `66`
         */
        value: string;
        /**
         * double值
         * @example `66.6`
         */
        doubleValue: number;
        /**
         * long值
         * @example `66`
         */
        longValue: number;
    }[];
}
