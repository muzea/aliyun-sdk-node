export interface ListDSEntityValueResponse {
    /**
     * 请求唯一标识
     * @example `n3fg34gbfj8adf2gj923`
     */
    RequestId: string;
    /**
     * 实体列表
     */
    EntityValues: {
        /**
         * 实体ID
         * @example `34313785463`
         */
        EntityId: number;
        /**
         * 实体成员ID
         * @example `3467858234534534532`
         */
        EntityValueId: number;
        /**
         * 实体成员名称（实体值或正则表达式）
         * @example `书类型`
         */
        Content: string;
        /**
         * 同义词列表
         */
        Synonyms: string[];
        /**
         * 创建时间(UTC时间）
         * @example `2021-08-12T16:00:01Z`
         */
        CreateTime: string;
        /**
         * 修改时间（UTC时间）
         * @example `2021-08-12T16:00:01Z`
         */
        ModifyTime: string;
    }[];
    /**
     * 总条数
     * @example `1`
     */
    TotalCount: number;
    /**
     * 当前页，默认1
     * @example `1`
     */
    PageNumber: number;
    /**
     * 页面大小，默认10
     * @example `10`
     */
    PageSize: number;
}
