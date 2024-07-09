export interface CreateGADInstanceResponse {
    /**
     * 请求ID。
     * @example `9F8C06AD-3F37-57A0-ABBF-ABD7824F55CE`
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
        CreateMemberCount: string;
        /**
         * 任务ID。
         * @example `5374****`
         */
        TaskID: string;
    };
}
