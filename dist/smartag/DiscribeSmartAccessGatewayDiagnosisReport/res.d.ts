export interface DiscribeSmartAccessGatewayDiagnosisReportResponse {
    /**
     * 请求ID。
     * @example `D7D6E3AB-D41A-42E3-8D4E-97B145F4B7C3`
     */
    RequestId: string;
    /**
     * 智能接入网关设备诊断报告。
     */
    DiagnoseResult: {
        /**
         * 诊断报告完成度百分比。
         * @example `100`
         */
        Percent: number;
        /**
         * 智能接入网关设备序列号。
         * @example `sag42c3****`
         */
        SN: string;
        /**
         * 诊断ID。
         * @example `dia-sag42c3t703trh02olv5rf****`
         */
        DiagnoseId: string;
        /**
         * 诊断状态。
         * - **processing**：诊断进行中。
         * - **finished**：诊断成功。
         * - **failed**：诊断失败。
         * - **error**：诊断过程出现错误。
         * - **upload_to_sls_fail**：诊断报告上传失败。
         * @example `finished`
         */
        State: string;
        /**
         * 发起诊断的用户类型。取值：**user**。
         * @example `user`
         */
        UserLevel: string;
        /**
         * 智能接入网关设备运行的软件版本。
         * @example `2.1.0`
         */
        BoxVersion: string;
        /**
         * 智能接入网关实例ID。
         * @example `sag-0nnteglltw6z4b***`
         */
        InstanceId: string;
        /**
         * 智能接入网关设备类型。
         * - **sag-1000**
         * - **sag-100WM**
         * @example `sag-1000`
         */
        BoxType: string;
        /**
         * 智能接入网关设备使用的监控版本。
         * @example `2.0.2.9`
         */
        MonitorVersion: string;
        /**
         * 已完成的诊断项个数。
         * @example `15`
         */
        FinishedNumber: number;
        /**
         * 诊断结果信息列表。
         */
        Details: {
            /**
             * 诊断类型。
             * - **config**：SAG配置。
             * - **internet**：全网质量。
             * - **biz**：业务质量。
             * @example `config`
             */
            Type: string;
            /**
             * 诊断项详细信息列表。
             */
            Items: {
                /**
                 * 诊断项所属诊断类型。
                 * - **config**：SAG配置。
                 * - **internet**：全网质量。
                 * - **biz**：业务质量。
                 * @example `config`
                 */
                Type: string;
                /**
                 * 诊断项诊断结束时间戳。
                 * @example `1602741570596`
                 */
                EndTime: number;
                /**
                 * 诊断项诊断开始时间戳。
                 * @example `1602741570567`
                 */
                StartTime: number;
                /**
                 * 中文版诊断结果。
                 */
                CN: {
                    /**
                     * 诊断建议。
                     */
                    Advice: string[];
                    /**
                     * 诊断项名称。
                     * @example `专线口配置检查`
                     */
                    ItemName: string;
                    /**
                     * 诊断项的诊断结果等级。
                     * - **严重**：标识该诊断项问题可能会影响业务运行，建议优先处理。
                     * - **警告**：标识该诊断项有问题，请依据建议酌情处理。
                     * - **正常**：标识该诊断项正常运行，无需任何操作。
                     * @example `正常`
                     */
                    ItemLevel: string;
                    /**
                     * 诊断项所属诊断类型。
                     * - **配置**：标识属于**SAG配置**类型。
                     * - **业务**：标识属于**业务质量**类型。
                     * - **公网**：标识属于**全网质量**类型。
                     * @example `配置`
                     */
                    ItemType: string;
                    /**
                     * 诊断结果
                     */
                    Details: string[];
                };
                /**
                 * 诊断项名称，为诊断项唯一标识。
                 * @example `eccConfigCheck`
                 */
                ItemName: string;
                /**
                 * 英文版诊断结果。
                 */
                EN: {
                    /**
                     * 诊断建议。
                     */
                    Advice: string[];
                    /**
                     * 诊断项名称。
                     * @example `Express Connect Port Configuration`
                     */
                    ItemName: string;
                    /**
                     * 诊断项的诊断结果等级。
                     * - **ERROR**：标识该诊断项问题可能会影响业务运行，建议优先处理。
                     * - **WARNING**：标识该诊断项有问题，请依据建议酌情处理。
                     * - **INFO**：标识该诊断项正常运行，无需任何操作。
                     * @example `ERROR`
                     */
                    ItemLevel: string;
                    /**
                     * 诊断项所属诊断类型。
                     * - **Config**：标识属于**SAG配置**类型。
                     * - **Service**：标识属于**业务质量**类型。
                     * - **Internet**：标识属于**全网质量**类型。
                     * @example `Config`
                     */
                    ItemType: string;
                    /**
                     * 诊断结果。
                     */
                    Details: string[];
                };
                /**
                 * 诊断项诊断结果等级。
                 * - **error**：严重。
                 * - **warning**：警告。
                 * - **info**：正常。
                 * @example `error`
                 */
                Level: string;
            }[];
            /**
             * 当前诊断类型下的诊断项等级统计信息列表。
             */
            Statistics: {
                /**
                 * 诊断结果等级为**警告**的诊断项数量。
                 * @example `2`
                 */
                Warning: number;
                /**
                 * 诊断结果等级为**严重**的诊断项数量。
                 * @example `5`
                 */
                Error: number;
                /**
                 * 当前诊断类型下的诊断项总数。
                 * @example `10`
                 */
                Total: number;
                /**
                 * 诊断结果等级为**正常**的诊断项数量。
                 * @example `3`
                 */
                Info: number;
            };
        }[];
        /**
         * 智能接入网关实例所属账号ID。
         * @example `1688000000000000`
         */
        UId: string;
        /**
         * 诊断结束时间戳。
         * @example `160274157`
         */
        EndTime: number;
        /**
         * 诊断开始时间戳。
         * @example `160274157`
         */
        StartTime: number;
        /**
         * 存储类型。
         * 取值：**both**，表示同时存储在智能接入网关设备和日志服务SLS（Log Service）中。
         * @example `both`
         */
        StoreType: string;
        /**
         * 诊断报告上传至SLS中的状态。
         * - **0**：上传失败。
         * - **1**：上传成功。
         * @example `0`
         */
        ReportSLSSuccess: number;
        /**
         * 诊断结果条目总数。
         * @example `15`
         */
        TotalNumber: number;
        /**
         * 诊断结果等级。
         */
        Level: {
            /**
             * SAG配置诊断结果等级。
             * @example `info`
             */
            Configuration: string;
            /**
             * 整体诊断结果等级。
             * - **error**：严重。
             * - **warning**：警告。
             * - **info**：正常。
             * @example `error`
             */
            Total: string;
            /**
             * 业务质量诊断结果等级。
             * @example `warning`
             */
            Biz: string;
        };
        /**
         * 整体诊断项结果统计信息。
         */
        Statistics: {
            /**
             * 诊断结果等级为**警告**的诊断项总数量。
             * @example `3`
             */
            Warning: number;
            /**
             * 诊断结果等级为**严重**的诊断项总数量。
             * @example `2`
             */
            Error: number;
            /**
             * 全部诊断项总数。
             * @example `10`
             */
            Total: number;
            /**
             * 诊断结果等级为**正常**的诊断项总数量。
             * @example `5`
             */
            Info: number;
        };
    };
}
