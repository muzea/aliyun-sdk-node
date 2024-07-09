export interface ListOTAJobByFirmwareResponse {
    /**
     * 当前页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `5D58AC86-D5BF-4B39-834E-913E7F2C985D`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 每页显示的设备升级作业数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总页数。
     * @example `1`
     */
    PageCount: number;
    /**
     * 设备升级作业数量总计。
     * @example `1`
     */
    Total: number;
    Data: {
        /**
         * 调用成功时，返回的批次信息。详情请参见**SimpleOTAJobInfo**下的参数。
         */
        SimpleOTAJobInfo: {
            /**
             * 升级包所属产品的唯一标识。
             * @example `a19mzPZ****`
             */
            ProductKey: string;
            /**
             * 批次的状态。
             * - **PLANNED**：计划中。批次已创建，但是定时时间未到。仅定时静态升级的批次可能返回该值。
             * - **IN_PROGRESS**：执行中。
             * - **COMPLETED**：已完成。
             * - **CANCELED**：已取消。
             * @example `IN_PROGRESS`
             */
            JobStatus: string;
            /**
             * 该批次任务开始执行时的时间，UTC格式。
             * @example `2019-12-28T02:43:10.000Z`
             */
            UtcStartTime: string;
            /**
             * 批次最后一次修改时的时间，UTC格式。
             * @example `2019-12-28T02:43:10.000Z`
             */
            UtcModified: string;
            /**
             * 升级批次ID，批次的唯一标识符。
             * @example `HvKuBpuk3rdk6E92CP****0200`
             */
            JobId: string;
            /**
             * 批次创建时的时间，UTC格式。
             * @example `2019-12-28T02:43:10.000Z`
             */
            UtcCreate: string;
            /**
             * 升级策略。
             * - **DYNAMIC**：动态升级。调用[CreateOTADynamicUpgradeJob](~~147887~~)创建的升级批次，该参数返回该值。
             * - **STATIC**：静态升级。调用[CreateOTAStaticUpgradeJob](~~147496~~)创建的升级批次，该参数返回该值。
             * @example `STATIC`
             */
            SelectionType: string;
            /**
             * 批次类型。
             * - **VERIFY_FIRMWARE**：升级包验证批次。
             * - **UPGRADE_FIRMWARE**：批量升级批次。
             * @example `UPGRADE_FIRMWARE`
             */
            JobType: string;
            /**
             * 升级范围。
             * - **ALL**：全量升级。
             * - **SPECIFIC**：定向升级。
             * - **GRAY**：灰度升级。
             * > 调用[CreateOTADynamicUpgradeJob](~~147887~~)创建的动态升级批次，该参数仅返回ALL。
             * @example `SPECIFIC`
             */
            TargetSelection: string;
            /**
             * 该批次任务执行结束时的时间，UTC格式。
             * 仅已执行结束的升级批次才返回此参数。
             * @example `2019-12-29T02:43:10.000Z`
             */
            UtcEndTime: string;
            /**
             * 升级包ID。
             * @example `UfuxnwygsuSkVE0VCN****0100`
             */
            FirmwareId: string;
            Tags: {
                /**
                 * 升级批次标签。
                 */
                OtaTagDTO: {
                    /**
                     * 标签名。
                     * @example `key1`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `value1`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}
