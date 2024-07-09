export interface ListVodTemplateResponse {
    /**
     * 请求ID。
     * @example `2A56B75B-B7E6-48*****27-A9BEAA3E50A8`
     */
    RequestId: string;
    /**
     * 截图模板数据列表。
     */
    VodTemplateInfoList: {
        /**
         * 创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2018-11-30T08:05:59:57Z`
         */
        CreationTime: string;
        /**
         * 是否默认。取值：
         * - **Default**：默认。
         * - **NotDefault**：非默认。
         * @example `NotDefault`
         */
        IsDefault: string;
        /**
         * 应用ID。
         * @example `app-****`
         */
        AppId: string;
        /**
         * 模板类型。取值：
         * - **Snapshot**：截图。
         * - **DynamicImage**：动图。
         * @example `Snapshot`
         */
        TemplateType: string;
        /**
         * 模板ID。
         * @example `7c49f2f42b1c*****0969fcd446690`
         */
        VodTemplateId: string;
        /**
         * 模板详细配置，JSON字符串。数据结构详情，请参见[SnapshotTemplateConfig](~~98618~~)。
         * @example `{\"SnapshotConfig\":{\"Count\":10,\"SpecifiedOffsetTime\":0,\"Interval\":1},\"SnapshotType\":\"NormalSnapshot\"}`
         */
        TemplateConfig: string;
        /**
         * 模板名称。
         * @example `test`
         */
        Name: string;
        /**
         * 修改时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2018-11-30T09:05:59:97Z`
         */
        ModifyTime: string;
    }[];
}
