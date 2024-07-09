export interface QueryLocalFileUploadJobResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `tenant auth error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `449ECE75-A36A-4ACE-B253-147C78C440C5`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 查询结果。
     */
    Data: {
        /**
         * 录像上传任务状态：
         * - 0：任务初始化中。
         * - 1：任务执行中。
         * - 2：任务执行完成。
         * @example `2`
         */
        Status: number;
        /**
         * 任务列表。
         */
        ResultList: {
            /**
             * 录像上传任务结束时间。
             * @example `1634746054`
             */
            SlotEndTime: number;
            /**
             * 视频设备所属产品的ProductKey。
             * @example `g2****Q6ggK`
             */
            ProductKey: string;
            /**
             * 视频设备的设备名称。
             * @example `gb_hik_IPC`
             */
            DeviceName: string;
            /**
             * 录像上传任务开始时间。
             * @example `1634745754`
             */
            SlotStartTime: number;
            /**
             * 录像上传任务状态码：
             * - 200：正常。
             * - 9201 ：设备不在线。请上线设备后重试。
             * - 9409 ：无云存储配额。请检查云存储配额后重试。
             * - 9417：设备、网络或其它异常。请您重试，或检查设备和网络状态。
             * - 9435 ：录像文件不存在。请确保视频设备本地存证录像文件，然后重试。
             * @example `9201`
             */
            Code: number;
            /**
             * **SlotStartTime**和**SlotEndTime**的时间段内，录像上传任务的执行状态：
             * - 0：任务初始化中。
             * - 1：任务执行中。
             * - 2：任务执行完成。
             * - 3：任务执行异常。
             * - 4：任务主动结束。
             * @example `3`
             */
            SlotStatus: number;
            /**
             * 视频设备的设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。
             * @example `IQ9mO4tvMnAj****QUdcg2n400`
             */
            IotId: string;
            /**
             * 录像文件列表。
             */
            FileList: {
                /**
                 * 录像文件名。
                 * @example `video1`
                 */
                FileName: string;
                /**
                 * 录像文件开始时间。
                 * @example `1634747054`
                 */
                FileStartTime: number;
                /**
                 * 录像文件结束时间。
                 * @example `1634746054`
                 */
                FileEndTime: number;
            }[];
        }[];
    };
}
