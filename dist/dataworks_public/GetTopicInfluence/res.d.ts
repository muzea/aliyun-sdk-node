export interface GetTopicInfluenceResponse {
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 本次调用的唯一ID。出现错误后，您可以根据该ID排查问题。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `The specified parameters are invalid.`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `1031203110005`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 事件影响的基线实例列表。
     */
    Data: {
        /**
         * 事件的ID。
         * @example `1234`
         */
        TopicId: number;
        /**
         * 影响的基线实例列表。
         */
        Influences: {
            /**
             * 基线的状态，包括ERROR（异常）、SAFE（安全）、DANGROUS（预警）和OVER（破线）。
             * @example `SAFE`
             */
            Status: string;
            /**
             * 基线责任人的阿里云UID。多个责任人之间使用英文逗号（,）分隔。
             * @example `952795****`
             */
            Owner: string;
            /**
             * 基线的名称。
             * @example `基线名称`
             */
            BaselineName: string;
            /**
             * 基线的ID。
             * @example `1234`
             */
            BaselineId: number;
            /**
             * 基线实例的业务日期时间戳。
             * @example `1553356800000`
             */
            Bizdate: number;
            /**
             * 基线实例的余量，单位为秒。
             * @example `360`
             */
            Buffer: number;
            /**
             * 基线所在工作空间的ID。
             * @example `1234`
             */
            ProjectId: number;
            /**
             * 基线的优先级，取值范围为{1,2,5,7,8}。
             * @example `1`
             */
            Priority: number;
            /**
             * 基线实例的周期号。天基线为1，小时基线的取值范围为\[1,24\]。
             * @example `1`
             */
            InGroupId: number;
        }[];
    };
}
