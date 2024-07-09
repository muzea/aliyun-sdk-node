export interface RebootInstancesResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    InstanceResponses: {
        /**
         * 由InstanceResponse组成的数组格式，返回每个实例操作的前后状态及操作结果。
         */
        InstanceResponse: {
            /**
             * 实例操作结果错误码。返回值为200表示操作成功。更多信息，请参见下文错误码列表。
             * @example `200`
             */
            Code: string;
            /**
             * 实例操作返回错误信息。返回值为Success表示操作成功。更多信息，请参见下文错误码列表。
             * @example `success`
             */
            Message: string;
            /**
             * 实例ID。
             * @example `i-bp1g6zv0ce8oghu7****`
             */
            InstanceId: string;
            /**
             * 实例当前状态。
             * @example `Stopping`
             */
            CurrentStatus: string;
            /**
             * 实例操作前状态。
             * @example `Running`
             */
            PreviousStatus: string;
        }[];
    };
}
