export interface BatchStartStreamsResponse {
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 结果列表。
     */
    Results: {
        /**
         * 流的错误信息。
         * >仅在流出错时存在。
         * @example `stream not found`
         */
        Error: string;
        /**
         * 流名称。
         * @example `31000000*****0000002`
         */
        Name: string;
        /**
         * 流ID。
         * @example `323*****997-cn-qingdao`
         */
        Id: string;
    }[];
}
