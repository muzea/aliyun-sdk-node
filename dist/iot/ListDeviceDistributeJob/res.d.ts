export interface ListDeviceDistributeJobResponse {
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
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
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
     * 调用成功后，返回的设备分发任务列表，详情参见**JobInfo**下信息。
     */
    Data: {
        /**
         * 返回的设备分发任务总条数。
         * @example `10`
         */
        Total: number;
        /**
         * 下一页标识。可在下次请求时传入，来获取下一页数据。
         * 如果返回值为空，则表示没有下一页数据了。
         * @example `TGlzdFJlc291***`
         */
        NextToken: string;
        JobInfo: {
            /**
             * 任务的信息。
             */
            items: {
                /**
                 * 分发策略。
                 * - **0**（默认）：指定地域，将设备分发到指定地域的指定实例。
                 * - **1**：就近接入，即设备分发任务中，配置了多个地域的实例ID，设备根据设备的IP位置，分发到距离其最近地域的实例中。
                 * @example `0`
                 */
                Strategy: number;
                /**
                 * 任务状态。
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
                 * 目标阿里云账号ID。
                 * @example `198***`
                 */
                TargetUid: string;
                /**
                 * 任务的ID。
                 * @example `UbmsMHmkqv0PiAG****010001`
                 */
                JobId: string;
                /**
                 * 任务的创建时间。
                 * @example `1581595942000`
                 */
                GmtCreate: number;
                /**
                 * 源实例名称。
                 * @example `实例调试1`
                 */
                SourceInstanceName: string;
                /**
                 * 源阿里云账号ID。
                 * @example `198***`
                 */
                SourceUid: string;
                /**
                 * 分发任务中的设备总数。
                 * @example `5`
                 */
                Total: number;
                /**
                 * 源实例所在地域。
                 * @example `cn-shanghai`
                 */
                SourceRegion: string;
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
                         * 目标实例名称。
                         * @example `实例调试2`
                         */
                        TargetInstanceName: string;
                        /**
                         * 目标实例所在地域。
                         * @example `cn-shanghai`
                         */
                        TargetRegion: string;
                        /**
                         * 目标实例ID。
                         * @example `iot-cn-6ja***`
                         */
                        TargetInstanceId: string;
                    }[];
                };
            }[];
        };
    };
}
