export interface ExportDataReflowDataListRequest {
    /**
     * 服务ID。
     * @example `432`
     */
    "ServiceId": number;
    /**
     * 开始时间。
     * > - StartTime不能大于EndTime。
     * - 当StartTime为空，EndTime不为空时，会导出EndTime前7天的回流数据。
     * @example `1663084800000`
     */
    "StartTime"?: number;
    /**
     * 结束时间。
     * > - EndTime不能小于StartTime。
     * - 当EndTime为空，StartTime不为空时，会导出StartTime后7天的回流数据。
     * @example `1663689599000`
     */
    "EndTime"?: number;
    /**
     * 文件名称（支持模糊搜索）。
     * @example `TestName`
     */
    "ImageName"?: string;
    /**
     * 标签（支持模糊搜索）。
     * @example `Test`
     */
    "Category"?: string;
    /**
     * 导出文件类型。
     * - **ONLY_IMAGE**（仅图片）：导出.txt格式文件，内容为图片的OSS签名路径（有效期为7天）。
     * - **IMAGE_AND_LABEL**（图片+标注）：导出.csv格式文件，导出的文件支持标注本地文件上传。
     * @example `ONLY_IMAGE`
     */
    "FileType": string;
}
