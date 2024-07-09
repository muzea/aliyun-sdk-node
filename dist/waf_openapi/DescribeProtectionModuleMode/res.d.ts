export interface DescribeProtectionModuleModeResponse {
    /**
     * 本次请求的ID。
     * @example `DE14845A-F46F-59BE-B8F7-6ED7A787D213`
     */
    RequestId: string;
    /**
     * 防护模块当前使用的防护模式。根据请求参数**DefenseType**不同，该参数的取值和含义不同，具体说明如下：
     * - **DefenseType**为**waf**（表示查询规则防护引擎），**Mode**取值：
     *     - **0**：表示拦截模式。
     *     - **1**：表示告警模式。
     * - **DefenseType**为**dld**（表示查询深度学习引擎），**Mode**取值：
     *     - **0**：表示告警模式。
     *     - **1**：表示拦截模式。
     * - **DefenseType**为**ac_cc**（表示查询CC安全防护模块），**Mode**取值：
     *     - **0**：表示防护模式。
     *     - **1**：表示防护-紧急模式。
     * - **DefenseType**为**antifraud**（表示查询数据风控模块），**Mode**取值：
     *     - **0**：表示告警模式。
     *     - **1**：表示拦截模式。
     *     - **2**：表示强拦截模式。
     * - **DefenseType**为**normalized**（表示查询主动防御模块），**Mode**取值：
     *     - **0**：表示告警模式。
     *     - **1**：表示拦截模式。
     * @example `0`
     */
    Mode: number;
}
