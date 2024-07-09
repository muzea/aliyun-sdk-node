export interface UpdateRecycleBinAttributeRequest {
    /**
     * 文件系统ID。
     * @example `1ca404****`
     */
    "FileSystemId": string;
    /**
     * 回收站中文件的保留时间。单位：天。
     * 取值范围：1~180
     * 默认值：3
     * @example `3`
     */
    "ReservedDays": number;
}
