export interface StopInstancesResponse {
    /**
     * 请求ID。
     * @example `1C488B66-B819-4D14-8711-C4EAAA13AC01`
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
             * @example `i-bp67acfmxazb4p****`
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
