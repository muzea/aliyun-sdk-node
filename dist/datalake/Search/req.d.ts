export interface SearchRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * catalogid
         * @example `默认是空，在多catalogid下填写对应的id`
         */
        CatalogId: string;
        /**
         * 搜索问题
         * @example `tags:tag1 or comment:^iso and name=aliyun and (createTime > "20211111" and createTime < "20211117") and has category`
         */
        SearchText: string;
        /**
         * 排序结构
         */
        SortCriteria: any[];
        /**
         * 当前查询的页大小
         * @example `1000`
         */
        PageSize: number;
        /**
         * 当前查询的页号
         * @example `1`
         */
        PageNumber: number;
        /**
         * 搜索类型
         * @example `TABLE/DATABASE/CATALOG`
         */
        SearchType: string;
    };
}
