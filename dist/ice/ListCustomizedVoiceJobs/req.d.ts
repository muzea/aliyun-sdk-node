export interface ListCustomizedVoiceJobsRequest {
    /**
     * 分页的页码。默认值：1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页大小，每页显示条数。默认值为10，最大值为100。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 人声克隆任务类型（版本），取值范围：
     * - Basic 基础版
     * - Standard 大众版
     * ><notice>不填默认为查找 Basic 基础版></notice>
     * @example `Standard`
     */
    "Type"?: string;
}
