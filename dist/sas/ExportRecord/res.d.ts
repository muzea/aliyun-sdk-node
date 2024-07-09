export interface ExportRecordResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6673D49C-A9AB-40DD-B4A2-B92306701AE7`
     */
    RequestId: string;
    /**
     * 导出文件的名称。
     * @example `cms_20171101.xlsx`
     */
    FileName: string;
    /**
     * 导出文件的ID。
     * @example `131231`
     */
    Id: number;
}
