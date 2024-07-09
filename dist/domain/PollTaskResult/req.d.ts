export interface PollTaskResultRequest {
    /**
     * 用户IP，可设置为**127.0.0.1**。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 任务编号。
     * @example `75addb07-28a3-450e-b5ec-test`
     */
    "TaskNo"?: string;
    /**
     * 域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 域名实例编号。
     * 信息模板创建成功后由系统自动生成，您可以调用[QueryRegistrantProfiles](~~67701~~)接口查询信息模板编号。
     * @example `S20181T0WLI85212`
     */
    "InstanceId"?: string;
    /**
     * 任务结果类型，取值：
     * - **2**：成功。
     * - **3**：失败。
     * @example `2`
     */
    "TaskResultStatus"?: number;
    /**
     * 页码。
     * @example `1`
     */
    "PageNum": number;
    /**
     * 分页大小。最大值为**1000**。
     * @example `20`
     */
    "PageSize": number;
}
