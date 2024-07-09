export interface StartInstancesResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    InstanceResponses: {
        /**
         * 由InstanceResponse组成的数组格式，返回每个实例操作的前后状态及操作结果。
         */
        InstanceResponse: {
            /**
             * 实例操作结果错误码。返回值200为成功，更多请参见下文错误码列表。
             * @example `200`
             */
            Code: string;
            /**
             * 实例操作返回错误信息。返回值success为成功，更多请参见下文错误码列表。
             * @example `success`
             */
            Message: string;
            /**
             * 实例ID。
             * @example `i-bp67acfmxazb4p****`
             */
            InstanceId: string;
            /**
             * 实例当前状态。
             * @example `Starting`
             */
            CurrentStatus: string;
            /**
             * 操作前实例的状态。
             * @example `Stopped`
             */
            PreviousStatus: string;
        }[];
    };
}
