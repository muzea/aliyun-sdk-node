export interface GetDiagnoseResultForSingleCardResponse {
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B45`
     */
    RequestId: string;
    /**
     * 网络诊断的云连接器实例ID。
     * @example `iotcc-smy9a5ockzp08n****`
     */
    IoTCloudConnectorId: string;
    /**
     * 网络诊断的源端卡的IP地址。
     * @example `169.254.XX.XX`
     */
    CardIp: string;
    /**
     * 网络诊断的源端卡的ID。
     * @example `89860477*******27546`
     */
    IccId: string;
    /**
     * 网络诊断的目的IP或者域名。
     * @example `114.114.XX.XX`
     */
    Destination: string;
    /**
     * 网络诊断的开始时间戳。单位：秒。
     * @example `1643077466`
     */
    BeginTime: number;
    /**
     * 网络诊断的结束时间戳。单位：秒。
     * @example `1643077666`
     */
    EndTime: number;
    /**
     * 网络诊断任务的状态。取值：
     * - **success**：表示诊断成功。
     * - **failed**：表示诊断失败。
     * - **diagnosing**：表示诊断中。
     * @example `failed`
     */
    Status: string;
    /**
     * 诊断结果列表。
     */
    ErrorResult: {
        /**
         * 诊断问题的级别。取值：
         * - **Error**：表示错误。
         * - **Warning**：表示警告。
         * @example `Warning`
         */
        ErrorLevel: string;
        /**
         * 诊断问题的组件。取值：
         * - **CCIOT**：表示诊断的问题为云连接器的问题。
         * - **Card**：表示诊断的问题为物联网卡的问题。
         * - **Terminal**：表示诊断的问题为终端的问题。
         * - **Server**：表示诊断的问题为服务器的问题。
         * - **Apn**：表示诊断的问题为APN的问题。
         * @example `Terminal`
         */
        ErrorPart: string;
        /**
         * 诊断问题的原因。
         * @example `Terminal abnormal`
         */
        ErrorDesc: string;
        /**
         * 诊断问题的解决建议。
         * @example `Please check whether the terminal and card are compatible or whether the terminal can send messages`
         */
        ErrorSuggestion: string;
    }[];
    /**
     * 诊断项信息列表。
     */
    DiagnoseItem: {
        /**
         * 诊断的部件名称。取值：
         * - **CCIOT**：云连接器。
         * - **Card**：物联网卡。
         * - **Terminal**：终端。
         * - **Server**：服务器。
         * - **Apn**：APN。
         * @example `Terminal`
         */
        Part: string;
        /**
         * 诊断部件的状态。取值：
         * - **Normal**：表示诊断状态正常。
         * - **Wrong**：表示诊断状态错误。
         * - **Unknown**：表示诊断状态未知。
         * @example `Normal`
         */
        Status: string;
    }[];
}
