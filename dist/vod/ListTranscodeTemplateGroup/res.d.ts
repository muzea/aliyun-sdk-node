export interface ListTranscodeTemplateGroupResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4A*****F6-D7393642CA58`
     */
    RequestId: string;
    /**
     * 转码模板组数据列表。
     */
    TranscodeTemplateGroupList: {
        /**
         * 模板组的创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2018-12-05T10:20:09Z`
         */
        CreationTime: string;
        /**
         * 是否是默认模板组。取值：
         * - **Default**：默认模板组。
         * - **NotDefault**：非默认模板组。
         * @example `Default`
         */
        IsDefault: string;
        /**
         * 应用ID。
         * @example `app-****`
         */
        AppId: string;
        /**
         * 转码模板组ID。
         * @example `17a9889fc66852*****d791c886700932`
         */
        TranscodeTemplateGroupId: string;
        /**
         * 模板组的名称。
         * @example `test`
         */
        Name: string;
        /**
         * 模板组的修改时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2018-12-05T10:22:09Z`
         */
        ModifyTime: string;
        /**
         * 转码模板组锁定状态。取值：
         * - **Disabled**：未锁定
         * - **Enabled**：锁定
         * @example `Disabled`
         */
        Locked: string;
    }[];
}
