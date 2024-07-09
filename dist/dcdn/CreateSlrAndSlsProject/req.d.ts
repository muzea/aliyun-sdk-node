export interface CreateSlrAndSlsProjectRequest {
    /**
     * 日志服务所在区域，取值范围：
     * - **cn-hangzhou**
     * - **cn-shanghai**
     * - **cn-qingdao**
     * - **cn-beijing**
     * - **cn-zhangjiakou**
     * - **cn-shenzhen**
     * - **eu-central-1**
     * - **us-west-1**
     * - **ap-south-1**
     * - **ap-southeast-1**
     * @example `cn-shanghai`
     */
    "Region": string;
    /**
     * 业务类型，取值：
     * - **cdn_log_access_l1**（默认值）：用户访问日志。
     * - **cdn_log_er**：边缘程序日志。
     * - **cdn_log_waf**：WAF拦截日志。
     * @example `cdn_log_access_l1`
     */
    "BusinessType"?: string;
}
