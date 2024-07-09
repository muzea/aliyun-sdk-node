export interface GetAdbSecureResponse {
    /**
     * 返回结果对象。
     */
    Data: {
        /**
         * ADB鉴权开关列表。
         */
        AdbSecureList: {
            /**
             * 实例ID。
             * @example `acp-5hh431emkt6u*****`
             */
            InstanceId: string;
            /**
             * ADB鉴权开关状态。
             * @example `1`
             */
            Status: number;
        }[];
    };
    /**
     * 接口请求ID。
     * @example `1A923337-44D9-5CAD-9A53-95084BD4****`
     */
    RequestId: string;
}
