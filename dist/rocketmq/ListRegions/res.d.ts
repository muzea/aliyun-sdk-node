export interface ListRegionsResponse {
    /**
     * 请求ID
     * @example `0B962390-D84B-5D44-8C11-79DF40299D41`
     */
    requestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果
     */
    data: {
        /**
         * regionId,类似 cn-hangzhou
         * @example `cn-hangzhou`
         */
        regionId: string;
        /**
         * 中文region，类似杭州
         * @example `杭州`
         */
        regionName: string;
        /**
         * 是否开通新服  v5版本
         * @example `true`
         */
        supportRocketmqV5: boolean;
        /**
         * 是否开通旧服  v4版本
         * @example `true`
         */
        supportRocketmqV4: boolean;
        /**
         * 创建时间
         * @example `2022-08-01 20:05:50`
         */
        createTime: string;
        /**
         * 修改时间
         * @example `2022-08-01 20:05:50`
         */
        updateTime: string;
        /**
         * 地域标签。
         */
        tags: {
            /**
             * 标签Code。
             * @example `xx`
             */
            tagCode: string;
            /**
             * 标签的值。
             * @example `xx`
             */
            tagValue: any;
        }[];
    }[];
    /**
     * 错误码
     * @example `MissingPageNumber`
     */
    code: string;
    /**
     * 错误信息
     * @example `Parameter instanceId is mandatory for this action .`
     */
    message: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    httpStatusCode: number;
    /**
     * 动态错误码
     * @example `ConsumerGroupId`
     */
    dynamicCode: string;
    /**
     * 动态错误信息
     * @example `instanceId`
     */
    dynamicMessage: string;
}
