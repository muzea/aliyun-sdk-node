export interface DescribeApplicationMonitorResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
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
     * 源站探测任务ID。
     * @example `sm-bp1fpdjfju9k8yr1y****`
     */
    TaskId: string;
    /**
     * 源站探测的任务名称。
     * @example `task1`
     */
    TaskName: string;
    /**
     * 需要探测的URL或IP地址。
     * @example `https://www.aliyun.com`
     */
    Address: string;
    /**
     * 源站探测任务对应监听协议类型的高级扩展选项。不同源站探测任务的监听协议类型对应不同的扩展选项。
     * @example `{ "http_method": "get","header": "key:asd","acceptable_response_code": "500","cert_verify": true }`
     */
    OptionsJson: string;
    /**
     * 运营商探测点信息列表。
     */
    IspCityList: {
        /**
         * 运营商探测点的ID。
         * @example `465`
         */
        Isp: string;
        /**
         * 运营商探测点的名称。
         * @example `阿里巴巴`
         */
        IspName: string;
        /**
         * 运营商探测点所在城市的ID。
         * @example `375`
         */
        City: string;
        /**
         * 运营商探测点所在城市的名称。
         * @example `新加坡`
         */
        CityName: string;
    }[];
    /**
     * 是否开启了自动诊断功能。
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    DetectEnable: boolean;
    /**
     * 自动诊断触发阈值。
     * 当源站可用率低于触发阈值时，自动触发诊断。
     * @example `0`
     */
    DetectThreshold: number;
    /**
     * 触发自动诊断需要达到触发阈值的次数。
     * @example `1`
     */
    DetectTimes: number;
    /**
     * 自动诊断触发的沉默时间。表示自动诊断触发后，未恢复到正常，间隔多久触发一次自动诊断。
     * 可用率连续多次（即设置的**DetectTimes**）低于自动诊断触发阈值时，触发自动诊断，如果可用率在自动诊断触发的沉默时间内持续低于自动诊断触发阈值，在自动诊断触发的沉默时间内不会重复出发自动诊断；如果可用率在自动诊断触发的沉默时间后仍未恢复正常，则再次触发自动诊断。
     * 单位：秒。
     * @example `300`
     */
    SilenceTime: number;
    /**
     * 全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 源站探测任务状态。
     * - **init**：初始化。
     * - **active**：可用。
     * - **updating**：配置中。
     * - **inactive**：不可用。
     * - **deleting**：删除中。
     * @example `active`
     */
    State: string;
}
