export interface ListDcdnKvResponse {
    /**
     * 请求ID。
     * @example `D61E4801-EAFF-4A63-AAE1-FBF6CE1CFD1C`
     */
    RequestId: string;
    /**
     * 返回的记录数。
     * @example `50`
     */
    PageSize: number;
    /**
     * 总页数。
     * @example `100`
     */
    PageNumber: number;
    /**
     * 总记录数。
     * @example `1024`
     */
    TotalCount: number;
    /**
     * 本次遍历获取的Key。
     */
    Keys: {
        /**
         * 遍历到的Key值。
         * @example `Key1`
         */
        Name: string;
        /**
         * Key的更新时间。
         * @example `2021-12-13T07:46:03Z`
         */
        UpdateTime: string;
    }[];
}
