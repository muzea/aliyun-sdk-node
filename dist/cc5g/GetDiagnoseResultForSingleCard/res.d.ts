export interface GetDiagnoseResultForSingleCardResponse {
    /**
     * 请求ID。
     * @example `94032572-8758-575E-B306-86F59D1B826E`
     */
    RequestId: string;
    /**
     * 5G高速上云实例ID。
     * @example `cc5g-xxxx`
     */
    WirelessCloudConnectorId: string;
    /**
     * 网络诊断的源端卡的IP地址。
     * @example `10.176.78.61`
     */
    CardIp: string;
    /**
     * 网络诊断的源端卡的ID。
     * @example `89860477102170127555`
     */
    IccId: string;
    /**
     * 网络诊断目的地址或域名。
     * @example `106.14.175.4`
     */
    Destination: string;
    /**
     * 网路诊断的目的类型。取值：
     * - **IP**：表示诊断的目的类型是IP类型。
     * - **Domain**：表示诊断的目的类型是域名类型。
     * @example `Domain`
     */
    DestinationType: string;
    /**
     * 网络诊断的开始时间戳。单位：秒。
     * @example `1646100223024`
     */
    BeginTime: number;
    /**
     * 网络诊断的结束时间戳。单位：秒。
     * @example `1646100223264`
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
         * 诊断部件对应的诊断指标项，详见 **返回参数补充说明**。
         * @example `CardStatus`
         */
        ErrorItem: string;
        /**
         * 诊断问题的描述。
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
         * @example `Wrong`
         */
        Status: string;
        /**
         * 诊断部件的诊断指标列表。
         */
        SubItems: {
            /**
             * 诊断部件对应的诊断指标项，详见 **返回参数补充说明**。
             * @example `CardStatus`
             */
            SubItem: string;
            /**
             * 诊断指标的状态。取值：
             * - **Normal**：表示诊断状态正常。
             * - **Warnning**：表示诊断状态为提示级别错误。
             * - **Minor**: 表示诊断状态为一般级别错误。
             * - **Major**: 表示诊断状态为严重级别错误。
             * - **Unknown**：表示诊断状态未知。
             * @example `Normal`
             */
            SubItemStatus: string;
            /**
             * 诊断指标的附加信息。
             * @example `Card status is real-time`
             */
            SubItemInfo: string;
        }[];
    }[];
}
