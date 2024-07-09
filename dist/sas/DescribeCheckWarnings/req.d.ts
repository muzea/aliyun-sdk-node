export interface DescribeCheckWarningsRequest {
    /**
     * 访问源的IP地址。
     * @example `1.2.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 执行基线检查的服务器的ID。
     * > 查询指定风险项和指定服务器下的检查项信息，需要提供执行基线检查的服务器的ID，该ID可调用[DescribeWarningMachines](~~DescribeWarningMachines~~)接口获取。
     * @example `d42f938c-d962-48a0-90f9-05****`
     */
    "Uuid": string;
    /**
     * 风险项ID。该参数为必填参数。
     * > 查询指定风险项和指定服务器下的检查项信息，需要提供风险项ID，该ID可调用[DescribeCheckWarningSummary](~~DescribeCheckWarningSummary~~)接口获取。
     * @example `10354`
     */
    "RiskId"?: number;
    /**
     * 设置分页查询时，每页显示的检查项信息的数量。默认值为**20**，表示每页显示20条检查项信息。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 检查项的ID。
     * @example `2546`
     */
    "CheckId"?: number;
    /**
     * 检查项类型。取值：
     * - **hc.check.type.identity_auth**：身份鉴别
     * - **hc.check.type.access_control**：访问控制
     * - **hc.check.type.network_service**：网络及服务
     * - **hc.check.type.service_conf**：服务配置
     * - **hc.check.type.file_rights**：文件权限
     * - **hc.check.type.security_audit**：安全审计
     * - **hc.check.type.attack_defense**：入侵防范
     * - **hc.check.type.others**：其他
     * @example `hc.check.type.attack_defense`
     */
    "CheckType"?: string;
    /**
     * 风险检测状态。取值：
     * - **1**：未通过
     * - **2**：验证中
     * - **3**：已通过
     * - **5**：已失效
     * - **6**：已忽略
     * @example `1`
     */
    "RiskStatus"?: number;
    /**
     * 容器名称。
     * @example `/redis`
     */
    "ContainerName"?: string;
    /**
     * 资源目录成员账号主账号ID。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `1232428423234****`
     */
    "ResourceDirectoryAccountId"?: number;
}
