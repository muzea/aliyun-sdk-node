export interface ListTagKeysResponse {
    /**
     * 根据`NextToken`判断是否具备下一个查询开始的Token。取值：
     * - 如果`NextToken`为空，即`"NextToken": ""`，表示没有下一个。
     * - 如果`NextToken`有值，则该值就是下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `DC09A6AA-2713-4E10-A2E9-E6C5C43A8842`
     */
    RequestId: string;
    Keys: {
        /**
         * 标签键信息。
         */
        Key: {
            /**
             * 标签键。
             * @example `team`
             */
            Key: string;
            /**
             * 资源标签类型。取值：
             * - custom：自定义标签。
             * - system：系统标签。
             * @example `custom`
             */
            Category: string;
            /**
             * 标签键描述。
             * @example `业务团队`
             */
            Description: string;
        }[];
    };
}
