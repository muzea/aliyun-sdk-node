export interface QueryTransferInListRequest {
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 用户IP，可设置为**127.0.0.1**。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 提交域名列表转入的结束时间。
     * @example `1514428524669`
     */
    "SubmissionStartDate"?: number;
    /**
     * 提交域名列表转入的开始时间。
     * @example `1514428524669`
     */
    "SubmissionEndDate"?: number;
    /**
     * 域名，前缀匹配（模糊查询）。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 转移状态。取值：
     * - **INIT**：提交转入。
     * - **AUTHORIZATION**：授权转入（邮箱验证）。
     * - **NAME_VERIFICATION**：命名审核。
     * - **PASSWORD_VERIFICATION**：转移密码验证。
     * - **PENDING**：转入处理中。
     * - **SUCCESS**：转入成功。
     * - **FAIL**：转入失败。
     * @example `INIT`
     */
    "SimpleTransferInStatus"?: string;
    /**
     * 域名列表的页码。
     * @example `1`
     */
    "PageNum": number;
    /**
     * 域名列表分页的大小。
     * @example `20`
     */
    "PageSize": number;
}
