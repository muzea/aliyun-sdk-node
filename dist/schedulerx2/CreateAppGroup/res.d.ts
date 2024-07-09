export interface CreateAppGroupResponse {
    /**
     * 返回码。
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息，仅错误时返回错误信息。
     * @example `Your request is denied as lack of ssl protect.`
     */
    Message: string;
    /**
     * 请求唯一ID。
     * @example `883AFE93-FB03-4FA9-A958-E750C6DE120C`
     */
    RequestId: string;
    /**
     * 创建应用是否成功。取值如下：
     * - **true**：创建应用成功。
     * - **false**：创建应用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 任务分组信息。
     */
    Data: {
        /**
         * 任务分组ID。
         * @example `6607`
         */
        AppGroupId: number;
        /**
         * 应用AppKey。
         * @example `adcExHZviL******`
         */
        AppKey: string;
    };
}
