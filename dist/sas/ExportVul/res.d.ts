export interface ExportVulResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `E1FAB2B8-DF4D-55DF-BC3D-5C3CA6FD5B13`
     */
    RequestId: string;
    /**
     * 导出文件的名称。
     * @example `app_20211101`
     */
    FileName: string;
    /**
     * 导出文件的ID。
     * @example `81634`
     */
    Id: number;
}
