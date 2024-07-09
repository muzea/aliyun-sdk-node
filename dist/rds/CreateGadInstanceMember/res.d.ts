export interface CreateGadInstanceMemberResponse {
    /**
     * 请求ID。
     * @example `16C62438-491B-5C02-9B49-BA924A1372A2`
     */
    RequestId: string;
    /**
     * 返回信息组成的数组。
     */
    Result: {
        /**
         * 全球多活数据库集群ID。
         * @example `gad-rm-bp1npi2j8****`
         */
        GadInstanceName: string;
        /**
         * 本次调用创建的节点数量。
         * @example `2`
         */
        CreateCount: string;
    };
}
