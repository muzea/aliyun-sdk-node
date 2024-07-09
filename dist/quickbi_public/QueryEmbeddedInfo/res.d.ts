export interface QueryEmbeddedInfoResponse {
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `D787E1A3-A93C-424A-B626-C2B05DF8D885`
     */
    RequestId: string;
    /**
     * 组织下报表的嵌入信息。
     */
    Result: {
        /**
         * 当前已经嵌入报表的数量。
         * @example `3`
         */
        EmbeddedCount: number;
        /**
         * 最大可嵌入报表的数量。
         * @example `100`
         */
        MaxCount: number;
        /**
         * 嵌入作品的统计信息。
         */
        Detail: {
            /**
             * 嵌入的自助取数数量。
             * @example `1`
             */
            DashboardOfflineQuery: number;
            /**
             * 嵌入的电子表格数量。
             * @example `1`
             */
            Report: number;
            /**
             * 嵌入的仪表板数量。
             * @example `1`
             */
            Page: number;
        };
    };
}
