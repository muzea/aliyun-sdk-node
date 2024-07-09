export interface ListEmailVerificationRequest {
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认值为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 查询创建邮箱验证的开始时间，计算方式为UTC时间1970年1月1日0点距离现在的毫秒数。
     * @example `1522080000000`
     */
    "BeginCreateTime"?: number;
    /**
     * 查询创建邮箱验证的结束时间，计算方式为UTC时间1970年1月1日0点距离现在的毫秒数。
     * @example `1522080000000`
     */
    "EndCreateTime"?: number;
    /**
     * 待查询的邮箱地址，每次仅可上传一个邮箱。
     * @example `username@example.com`
     */
    "Email"?: string;
    /**
     * 邮箱验证状态。取值：
     * - **0**：等待验证。
     * - **1**：验证成功。
     *
     * @example `1`
     */
    "VerificationStatus"?: number;
    /**
     * 域名列表分页的页码，默认值为**1**，可根据自身需求进行设置。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 域名列表分页的大小，默认值为**500**，最大值为**5000**，可根据自身需求设置。
     * @example `500`
     */
    "PageSize"?: number;
    /**
     * 用户IP，可设置为**127.0.0.1**。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
}
