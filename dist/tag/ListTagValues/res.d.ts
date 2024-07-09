export interface ListTagValuesResponse {
    /**
     * 根据`NextToken`判断是否具备下一个查询开始的Token。取值：
     * - 如果`NextToken`为空，即`"NextToken": ""`，表示没有下一个。
     * - 如果`NextToken`有值，则该值就是下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `8989CA7E-D2E0-4B6D-8282-311106E80150`
     */
    RequestId: string;
    Values: {
        /**
         * 标签值列表。
         */
        Value: string[];
    };
}
