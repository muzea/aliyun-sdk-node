export interface GetDatasetRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `immtest`
     */
    "ProjectName": string;
    /**
     * 数据集名称, 获取方式请参见[创建数据集](~~478160~~)。
     * @example `dataset001`
     */
    "DatasetName": string;
    /**
     * 是否需要进行文件统计。默认值false，不需要进行文档统计。
     * - 需要进行文件统计。返回Dataset结构体中的FileCount和TotalFileSize真实有效。
     * - 不需要进行文件统计。返回Dataset结构体中的FileCount和TotalFileSize可能不正确也可能都为0。
     * @example `true`
     */
    "WithStatistics"?: boolean;
}
