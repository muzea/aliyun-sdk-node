export interface ListUploadedPartsResponse {
    /**
     * 文件id
     * @example `322fb07b975f4b0ae1b543fe8475eee4c19eb2b2`
     */
    file_id: string;
    /**
     * 上传id
     * @example `00166D06127B413BA1EC8ABB1144D101`
     */
    upload_id: string;
    /**
     * 分段信息列表
     */
    uploaded_parts: any[];
    /**
     * 下一页起始资源标识符, 最后一页该值为空。
     * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
     */
    next_part_number_marker: string;
    /**
     * 是否并行上传
     * @example `false`
     */
    parallel_upload: boolean;
}
