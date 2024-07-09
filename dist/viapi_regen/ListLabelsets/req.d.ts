export interface ListLabelsetsRequest {
    /**
     * 当前页数。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 每页数据显示条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 数据集ID。
     * @example `137`
     */
    "DatasetId": number;
    /**
     * 标注状态。取值如下：
     * - **FILE_CHECKING**：文件格式校验中
     * - **FILE_CHECK_SUCCESS**：文件格式校验成功
     * - **FILE_CHECK_FAIL**：文件格式校验失败
     * - **TAG_SYSTEM_INIT**：标注系统初始化中
     * - **TAGGING**：标注中
     * - **TAG_FINISHED**：标注完成
     * @example `["FILE_CHECKING","FILE_CHECK_SUCCESS"]`
     */
    "Status"?: string;
}
