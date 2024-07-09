export interface AddVodTemplateRequest {
    /**
     * 模板名称。
     * - 长度不超过128个字节。
     * - UTF-8编码。
     * @example `test`
     */
    "Name": string;
    /**
     * 模板类型。取值：
     * - **Snapshot**：截图。
     * - **DynamicImage**：动图。
     * @example `Snapshot`
     */
    "TemplateType": string;
    /**
     * 模板配置数据（JSON格式）。数据结构详情，请参见[截图模板配置](~~98618~~)或[动图模板配置](~~98618~~)。
     * @example `{"SnapshotConfig":{"Count":10,"SpecifiedOffsetTime":0,"Interval":1,"FrameType":"normal"},"SnapshotType":"NormalSnapshot"}`
     */
    "TemplateConfig": string;
    /**
     * 应用ID。默认取值**app-1000000**。使用说明，请参见[多应用](~~113600~~)。
     * @example `app-****`
     */
    "AppId"?: string;
}
