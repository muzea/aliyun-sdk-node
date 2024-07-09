export interface OnsTopicStatusResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `427EE49D-D762-41FB-8F3D-9BAC96C3****`
     */
    RequestId: string;
    /**
     * 查询到的Topic的信息存储数据结构。
     */
    Data: {
        /**
         * 所有关系编号。取值说明如下：
         * - **2**：可以发布
         * - **4**：可以订阅
         * - **6**：可以发布和订阅
         * @example `6`
         */
        Perm: number;
        /**
         * 当前Topic内最新一条消息的就绪时间，如果Topic内没有消息，则该参数返回值为0。
         * 该参数值的格式为毫秒级Unix时间戳。
         * 就绪消息及就绪时间具体含义，请参见[名词解释](~~29533~~)。
         * @example `1570864984364`
         */
        LastTimeStamp: number;
        /**
         * 当前Topic的所有分区存在的消息数总和。
         * @example `2310`
         */
        TotalCount: number;
    };
}
