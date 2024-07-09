export interface ListApplicationMonitorDetectResultResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 总列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 源站探测任务的诊断结果信息。
     */
    ApplicationMonitorDetectResultList: {
        /**
         * 源站探测任务对应的全球加速实例ID。
         * @example `ga-bp1odcab8tmno0hdq****`
         */
        AcceleratorId: string;
        /**
         * 源站探测任务对应的监听实例ID。
         * @example `lsr-bp1bpn0kn908w4nbw****`
         */
        ListenerId: string;
        /**
         * 源站探测的任务ID。
         * @example `sm-bp1fpdjfju9k8yr1y****`
         */
        TaskId: string;
        /**
         * 监听端口。
         * @example `80`
         */
        Port: string;
        /**
         * 监听的网络传输协议类型。
         * - **tcp**：TCP协议。
         * - **udp**：UDP协议。
         * - **http**：HTTP协议。
         * - **https**：HTTPS协议。
         * > UDP协议类型的监听不支持探测。
         * @example `http`
         */
        Protocol: string;
        /**
         * 源站探测任务的诊断结果。
         * - **success**：源站探测任务成功。
         * - **failed**：源站探测任务失败。
         * @example `success`
         */
        DiagStatus: string;
        /**
         * 源站检测任务诊断返回的错误码。
         * @example `502`
         */
        StatusCode: string;
        /**
         * 源站检测任务诊断返回的响应内容。
         * @example `502 BadGateway`
         */
        Content: string;
        /**
         * 源站探测任务的诊断结果描述。
         * - **All forward nodes work well.**：未发现异常。
         * - **Endpoint network error.**：源站异常，需要排查源站业务是否正常运行。
         * - **Public network error.**：公网错误，一般指客户端到加速地域的网络错误。
         * - **Ga internal error.**：内部错误，例如，全球加速实例内部处理请求异常。
         * - **Ga has been deleted.**：当前全球加速实例已经被删除。
         * - **Ga state is not stable**：当前全球加速实例状态不稳定，例如处于配置中。
         * - **Ga has no listener configuration.**：当前全球加速实例无监听配置。
         * - **Missing endpoint configuration.**：缺少终端节点配置。
         * - **Missing acceleration region configuration.**：缺少加速地域配置。
         * - **Missing endpointgroup configuration.**：缺少终端节点组配置。
         * @example `All forward nodes work well`
         */
        Detail: string;
        /**
         * 源站检测任务诊断结束时间。
         * @example `1663205460`
         */
        DetectTime: string;
    }[];
}
