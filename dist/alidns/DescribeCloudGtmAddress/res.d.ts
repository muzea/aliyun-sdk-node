export interface DescribeCloudGtmAddressResponse {
    /**
     * 唯一请求识别码。
     * @example `B57C121B-A45F-44D8-A9B2-13E5A5044195`
     */
    RequestId: string;
    /**
     * 地址的ID，地址唯一标识码。
     * @example `addr-89518218114368**92
    `
     */
    AddressId: string;
    /**
     * 地址创建时间。
     * @example `2024-03-23T13:09Z`
     */
    CreateTime: string;
    /**
     * 创建时间（时间戳）。
     * @example `1527690629357`
     */
    CreateTimestamp: number;
    /**
     * 地址配置的最后修改时间。
     * @example `2024-03-29T13:20Z`
     */
    UpdateTime: string;
    /**
     * 修改时间（时间戳）。
     * @example `1527690629357`
     */
    UpdateTimestamp: number;
    /**
     * 地址名称。
     * @example `test`
     */
    Name: string;
    /**
     * 地址类型：
     * - IPv4
     * - IPv6
     * - domain
     * @example `IPv4`
     */
    Type: string;
    /**
     * IP地址或者域名。
     * @example `223.5.XX.XX`
     */
    Address: string;
    /**
     * 地址归属信息。
     * @example `当前版本不支持此参数，不会返回地址归属信息。`
     */
    AttributeInfo: string;
    /**
     * 备注。
     * @example `test1`
     */
    Remark: string;
    /**
     * 表示该地址当前启用状态：
     * enable：启用状态
     * disable：禁用状态
     * @example `enable`
     */
    EnableStatus: string;
    /**
     * 地址探测异常切换方式：
     * - auto：自动模式（根据健康检查探测结果确定，探测异常停止解析，探测正常恢复解析）
     * - manual：手动模式（异常状态下停止解析，健康检查正常也不会恢复解析；正常状态下恢复解析，健康检查异常也只是告警，但不会停止解析。）
     * @example `auto`
     */
    AvailableMode: string;
    /**
     * 当地址探测异常切换模式为manual时，地址设置的可用状态：
     * - available：正常，此状态下该地址正常解析，健康检查异常也只是告警，但不会停止解析；
     * - unavailable：异常，此状态下停止解析，健康检查正常也不会恢复解析；
     * @example `available`
     */
    ManualAvailableStatus: string;
    /**
     * 地址可用状态：
     * - available：可用
     * - unavailable：不可用
     * @example `available`
     */
    AvailableStatus: string;
    /**
     * 地址健康检查探测结果：
     * - ok：地址引用的健康探测模板探测任务全部正常；
     *  - ok_alert：地址引用的健康探测模板探测任务部分异常，地址判定为正常状态；
     *  - ok_no_monitor：地址没有引用任何健康探测模板；
     *  - exceptional：地址引用的健康探测模板探测任务部分或全部异常，但地址判定为异常状态；
     * @example `ok`
     */
    HealthStatus: string;
    /**
     * 地址健康状态判定条件：
     * - any_ok：所有探测模板至少一个探测正常
     * - p30_ok：所有探测模板至少30%探测正常
     * - p50_ok：所有探测模板至少50%探测正常
     * - p70_ok：所有探测模板至少70%探测正常
     * - all_ok：所有探测模板全部探测正常
     * @example `p50_ok`
     */
    HealthJudgement: string;
    HealthTasks: {
        /**
         * 健康探测任务列表。
         */
        HealthTask: {
            /**
             * 健康检查探测的目标地址服务端口，当健康检查选择Ping协议时，不支持服务端口的配置。
             * @example `80`
             */
            Port: number;
            /**
             * 地址关联的健康探测模板ID。
             * @example `mtp-89518052425100**80`
             */
            TemplateId: string;
            /**
             * 健康探测模板名称
             * @example `Ping-IPv4`
             */
            TemplateName: string;
            /**
             * 健康探测模板探测任务状态：
             * - ok：正常
             * - alert：告警
             * - no_data：无数据，一般是健康探测任务刚创建，探测任务数据暂未采集到
             * @example `ok`
             */
            MonitorStatus: string;
        }[];
    };
}
