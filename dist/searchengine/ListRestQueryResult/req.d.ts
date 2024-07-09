export interface ListRestQueryResultRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 地址。
     * @example `47.100.XX.XX`
     */
    "address"?: string;
    /**
     * 请求结构。
     */
    "body"?: {
        /**
         * 索引表名
         * @example `main_index`
         */
        indexName: string;
        /**
         * rest查询语句
         * @example `query%3Drelation_id%3A%221151274675_2%22%26%26cluster%3Dgeneral%26%26config%3Dstart%3A0%2Chit%3A10%2Cformat%3Ajson`
         */
        query: any;
    };
}
