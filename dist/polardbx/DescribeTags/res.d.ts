export interface DescribeTagsResponse {
    /**
     * Id of the request
     * @example `requestid`
     */
    RequestId: string;
    /**
     * 标签信息列表
     */
    TagInfos: {
        /**
         * 标签Key
         * @example `testKey`
         */
        TagKey: string;
        /**
         * 标签Value
         * @example `testValue`
         */
        TagValue: string;
        /**
         * 标签关联数据库实例列表
         */
        DBInstanceIds: string[];
    }[];
}
