export interface QueryDeviceDistributeJobResponse {
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
     * @example ` E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
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
     * 调用成功后，返回的设备分发任务详情。
     */
    Data: {
        /**
         * 分发策略。
         * - **0**：指定地域，将设备分发到指定地域的指定实例。
         * - **1**：就近接入，配置了多个地域的实例ID，设备将根据设备的IP位置动态接入其中距离最近的地域。
         * @example `0`
         */
        Strategy: number;
        /**
         * 分发任务状态。
         * - **0**：任务初始化。
         * - **1**：任务执行中。
         *
         * - **2**：任务完成。该状态仅表示分发任务执行完成，不表示所有产品和设备都分发成功。获取分发结果详情，请调用[QueryDeviceDistributeDetail](~~199533~~)。
         * - **3**：任务异常中断。
         * @example `1`
         */
        Status: number;
        /**
         * 设备所属产品的**ProductKey**。
         * @example `a1BwAGV****`
         */
        ProductKey: string;
        /**
         * 阿里云账号ID。
         * @example `198***`
         */
        TargetUid: string;
        /**
         * 分发任务的ID。
         * @example `UbmsMHmkqv0PiAG****010001`
         */
        JobId: string;
        /**
         * 分发任务的创建时间。
         * @example `1581595942000`
         */
        GmtCreate: number;
        /**
         * 阿里云账号ID。
         * @example `198***`
         */
        SourceUid: string;
        /**
         * 分发任务中的设备总数。
         * @example `5`
         */
        Total: number;
        /**
         * 源实例ID。
         * @example `iot-cn-6ja***`
         */
        SourceInstanceId: string;
        TargetInstanceConfigs: {
            /**
             * 目标实例ID列表。
             * - 当参数**Strategy**为**1**时，列表可有多个实例ID。
             * - 当参数**Strategy**为**0**时，列表有一个实例ID。
             */
            targetInstanceConfigs: {
                /**
                 * 目标实例ID。
                 * @example `iot-cn-6ja***`
                 */
                TargetInstanceId: string;
            }[];
        };
    };
}
