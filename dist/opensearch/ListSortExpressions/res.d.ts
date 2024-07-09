export interface ListSortExpressionsResponse {
    /**
     * 请求ID
     * @example `D77D0DAF-790D-F5F5-A9C0-133738165014`
     */
    requestId: string;
    /**
     * 粗排或精排表达式信息
     * 参考：[FirstRank](~~170007~~)、[SecondRank](~~170008~~)
     */
    result: {
        /**
         * 创建时间（时间戳）
         * @example `1655793690`
         */
        created: number;
        /**
         * 是否是默认表达式
         * @example `true`
         */
        active: boolean;
        /**
         * 描述
         * @example `""`
         */
        description: string;
        /**
         * 更新时间（时间戳）
         * @example `1655793690`
         */
        updated: number;
        /**
         * 名称
         * @example `default`
         */
        name: string;
    }[];
}
