export interface GetLiveSnapshotTemplateResponse {
    /**
     * 请求ID。
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 模板ID。
     * @example `****a046-263c-3560-978a-fb287782****`
     */
    TemplateId: string;
    /**
     * 模板名称。
     * @example `模板1`
     */
    TemplateName: string;
    /**
     * 模板类型。
     * @example `custom`
     */
    Type: string;
    /**
     * 覆盖截图文件格式。
     * @example `snapshot/{JobId}.jpg`
     */
    OverwriteFormat: string;
    /**
     * 序列截图文件格式。
     * @example `snapshot/{JobId}/{UnixTimestamp}.jpg`
     */
    SequenceFormat: string;
    /**
     * 截图时间间隔。
     * @example `5`
     */
    TimeInterval: number;
    /**
     * 创建时间。
     * @example `2022-02-02T22:22:22Z`
     */
    LastModified: string;
    /**
     * 修改时间。
     * @example `2022-02-02T22:22:22Z`
     */
    CreateTime: string;
}
