export interface ModifyProtectionModuleModeRequest {
    /**
     * 已添加的域名名称。
     * @example `www.example.com`
     */
    "Domain": string;
    /**
     * 防护功能模块，取值：
     * - **waf**：正则防护引擎
     * - **dld**：大数据深度学习引擎
     * - **ac_cc**：CC安全防护
     * - **antifraud**：数据风控
     * - **normalized**：主动防御
     * @example `waf`
     */
    "DefenseType": string;
    /**
     * 防护模式。
     * > 根据所指定的防护模块（**DefenseType**）不同，防护模式（**Mode**）值的含义有所不同。
     * - 正则防护引擎（**waf**）
     *     - **0**：表示拦截模式。
     *     - **1**：表示告警模式。
     * - 大数据深度学习引擎（**dld**）
     *     - **0**：表示告警模式。
     *     - **1**：表示拦截模式。
     * - CC安全防护（**ac_cc**）
     *     - **0**：表示防护模式。
     *     - **1**：表示防护-紧急模式。
     * - 数据风控（**antifraud**）
     *     - **0**：表示告警模式。
     *     - **1**：表示拦截模式。
     *     - **2**：表示强拦截模式。
     * - 主动防御（**normalized**）
     *     - **1**：表示拦截模式。
     *     - **0**：表示告警模式。
     * @example `0`
     */
    "Mode": number;
    /**
     * WAF实例ID。
     * > 您可以通过调用[DescribeInstanceInfo](~~140857~~)接口查看当前WAF实例ID。
     * @example `waf_elasticity-cn-0xldbqt****`
     */
    "InstanceId": string;
    /**
     * WAF实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-atstuj3rtop****`
     */
    "ResourceGroupId"?: string;
    /**
     * WAF实例所属地域。取值：
     * - **cn-hangzhou**：表示中国内地。
     * - **ap-southeast-1**：表示非中国内地。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
