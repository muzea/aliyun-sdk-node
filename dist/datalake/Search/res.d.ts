export interface SearchResponse {
    /**
     * 响应代码
     * @example `OK`
     */
    Code: string;
    /**
     * 响应消息
     * @example `""`
     */
    Message: string;
    /**
     * 请求ID
     * @example `460C862F-BB91-5C04-BC3F-946EEF467862`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
    /**
     * 返回的db结果
     */
    DatabaseResult: {
        /**
         * 返回的DatabaseList
         */
        Databases: {
            /**
             * 返回的Database
             */
            Database: any;
            /**
             * 返回高亮文本
             */
            HighLightList: any[];
        }[];
        /**
         * 满足匹配条件的总的Database个数
         * @example `11000`
         */
        TotalCount: number;
    };
    /**
     * 返回的table result
     */
    TableResult: {
        /**
         * 返回的TableList
         */
        Tables: {
            /**
             * 返回的Table
             */
            Table: any;
            /**
             * 返回的高亮文本
             */
            HighLightList: any[];
        }[];
        /**
         * 满足匹配条件的总的Table个数
         * @example `1100`
         */
        TotalCount: number;
    };
}
