export interface QueryJobResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `A6BEAB33-03E6-4CE0-A94F-9E24C5512BAD`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的任务详情信息，请参见以下参数说明。
     */
    Data: {
        /**
         * 任务类型。取值：
         * - **INVOKE_SERVICE**：设备批量服务调用任务。
         * - **SET_PROPERTY**：设备批量属性设置任务。
         * - **PUB**：Pub批量消息推送任务。
         * - **CUSTOM_JOB**：自定义任务。
         * @example `SET_PROPERTY`
         */
        Type: string;
        /**
         * 任务状态。取值范围：
         * - **INITIALIZING**：初始化。
         * - **WAITING**：待调度。
         * - **IN_PROGRESS**：执行中。
         * - **COMPLETED**：已完成。
         * - **CANCELLING**：取消中。
         * - **CANCELLED**：已取消。
         * - **REMOVING**：删除中。
         * - **TIMED_OUT**：已超时。
         * @example `CANCELLED`
         */
        Status: string;
        /**
         * 任务的描述信息。
         * @example `jobDescription`
         */
        Description: string;
        /**
         * 任务名称。
         * @example `tes`
         */
        JobName: string;
        /**
         * 任务信息修改时间。
         * @example `2020-12-13T04:10:00.000Z`
         */
        UtcModified: string;
        /**
         * 任务ID。任务的全局唯一标识符。
         * @example `450407b***`
         */
        JobId: string;
        /**
         * 任务创建时间。
         * @example `2020-12-13T04:09:51.000Z`
         */
        UtcCreate: string;
        /**
         * 任务调度时间的毫秒数。
         * @example `1557062301656`
         */
        ScheduledTime: number;
        /**
         * 下发给设备的任务执行规则文件
         * @example `{ "serviceIdentifier": "test_service", "params": { "key1": "value1", "key2": "value2" } } `
         */
        JobDocument: string;
        /**
         * 任务下作业推送速率配置。
         */
        RolloutConfig: {
            /**
             * 任务下每分钟作业推送数量。
             * @example `10`
             */
            MaximumPerMinute: number;
            /**
             * 发送消息类型，仅对自定义任务和Pub批量消息推送任务包含该参数。可取值：
             * - **QoS0**，表示最多发送一次。
             * - **QoS1**，表示最少发送一次。如果QoS1消息未接收到PUBACK消息，会在设备重连时，重新推送给设备。
             * @example `Qos1`
             */
            MessageQoS: string;
        };
        /**
         * 任务下作业执行的超时配置
         */
        TimeoutConfig: {
            /**
             * 任务下作业执行的超时时间，单位为分钟。
             * @example `5`
             */
            InProgressTimeoutInMinutes: number;
        };
        /**
         * 任务文件的下载信息。
         */
        JobFile: {
            /**
             * 任务文件的下载地址，地址有效时间为30分钟。
             * @example `https://iotx-***.oss-cn-shanghai.aliyuncs.com/job***​/7u***.sh?Expires=16***&OSSAccessKeyId=LTA***&Signature=TTTejn***`
             */
            FileUrl: string;
            /**
             * 签名方法，可取值MD5和SHA256。
             * @example `SHA256`
             */
            SignMethod: string;
            /**
             * 签名，通过URL上传的文件，根据相应的签名方法生成的签名参数。
             * @example `TTTejn***`
             */
            Sign: string;
        };
        /**
         * 设备任务的目标设备配置。
         */
        TargetConfig: {
            /**
             * 目标设备所属产品的ProductKey。
             * @example `nCwfSBzc***`
             */
            TargetProduct: string;
            /**
             * 目标设备所属设备分组的标识符（GroupID）。
             * @example `1234`
             */
            TargetGroup: string;
            /**
             * 目标设备的配置类型，取值：
             * - DEVICE_LIST：设备列表。
             * - GROUP_ID：设备分组ID。
             * - PRODUCT_KEY：产品ProductKey。
             * @example `DEVICE_LIST`
             */
            TargetType: string;
            TargetDevices: {
                /**
                 * 目标设备列表。
                 */
                targetDevices: {
                    /**
                     * 设备名称。
                     * @example `a1Ix***`
                     */
                    DeviceName: string;
                    /**
                     * 设备所属产品的ProductKey。
                     * @example `nCwfSBzc***`
                     */
                    ProductKey: string;
                }[];
            };
        };
    };
}
