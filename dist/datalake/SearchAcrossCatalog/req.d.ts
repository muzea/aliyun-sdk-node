export interface SearchAcrossCatalogRequest {
    /**
     * A short description of struct
     */
    "body"?: {
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
         * CatalogId数组，为空则搜索所有Catalog
         */
        CatalogIds: any;
        /**
         * SearchTypes数组，可选值为ALL/CATALOG/DATABASE/TABLE
         */
        SearchTypes: any;
    };
}
