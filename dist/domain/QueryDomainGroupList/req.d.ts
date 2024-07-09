export interface QueryDomainGroupListRequest {
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文；
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 用户IP，可以设置为**127.0.0.1**。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 用户自定义的域名分组名称。
     * @example `默认分组`
     */
    "DomainGroupName"?: string;
    /**
     * 是否展示正在删除中的域名分组，取值如下：
     * - **false**：否。
     * - **true**：是。
     * 默认为**false**。
     * @example `false`
     */
    "ShowDeletingGroup"?: boolean;
}
