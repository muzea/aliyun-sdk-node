export interface ListVulAutoRepairConfigResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3B3F3A90-46A5-4023-A2D8-D68B14262F96`
     */
    RequestId: string;
    /**
     * 接口调用是否成功。取值：
     * - **true**：接口调用成功。
     * - **false**：接口调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 错误码的详细信息。
     * @example `success`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 可自动修复漏洞配置列表。
     */
    VulAutoRepairConfigList: {
        /**
         * 可自动修复漏洞配置ID。
         * @example `37338`
         */
        Id: number;
        /**
         * 漏洞名称。
         * @example `anolisos:8.4:ANSA-2022:0001
        `
         */
        Name: string;
        /**
         * 漏洞类型。取值：
         * - **cve**：Linux漏洞
         * - **sys**：Windows漏洞
         * @example `cve`
         */
        Type: string;
        /**
         * 漏洞别名。
         * @example `RHSA-2022:0274-Important: polkit pkexec Local Privilege Escalation Vulnerability(CVE-2021-4034)`
         */
        AliasName: string;
        /**
         * 可自动化修复漏洞的原因说明。
         * @example `The vulnerability fix is risk-free and can be configured to automate the fix.
        `
         */
        Reason: string;
    }[];
    /**
     * 页面显示的信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的可自动修复漏洞配置信息的数量。默认值为**10**，表示每页显示10条可自动修复漏洞配置。
         * @example `10`
         */
        PageSize: number;
        /**
         * 查询到的可自动修复漏洞配置信息的总数量。
         * @example `11`
         */
        TotalCount: number;
        /**
         * 当前页面显示的可自动修复漏洞配置信息的数量。
         * @example `10`
         */
        Count: number;
    };
}
