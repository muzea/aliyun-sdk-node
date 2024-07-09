export interface CreateNumberDistrictInfoParsingTaskRequest {
    /**
     * 文件路径
     * @example `UPLOADED/JOB/a4274627-265f-4e14-b2d6-4ee7d4f8593e/16371db9-0abb-4ee4-afbd-c909e982e97e_止呼号码.xlsx`
     */
    "FilePath"?: string;
    /**
     * 文件大小
     * @example `190464`
     */
    "FileSize"?: number;
}
