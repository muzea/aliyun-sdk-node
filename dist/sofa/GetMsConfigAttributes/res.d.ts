export interface GetMsConfigAttributesResponse {
    /**
     * 结果描述
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 请求ID
     * @example `861E6630-AEC0-4B2D-B214-6CB5E44B7F04`
     */
    RequestId: string;
    /**
     * 属性信息
     */
    Attribute: {
        /**
         * 实例 ID
         * @example `abcdEFGH1234`
         */
        InstanceId: string;
        /**
         * 属性名
         * @example `switch`
         */
        AttributeName: string;
        /**
         * 属性 ID
         * @example `1`
         */
        Id: number;
        /**
         * 属性描述信息
         * @example `活动开关`
         */
        Desc: string;
    };
}
