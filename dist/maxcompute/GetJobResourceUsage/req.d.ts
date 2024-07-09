export interface GetJobResourceUsageRequest {
    /**
     * 查询的日期，以天为级别，时间参数填写必须为yyyy-MM-dd
     * @example `2023-05-15`
     */
    "date": string;
    /**
     * 作业的执行者列表
     */
    "jobOwnerList"?: string[];
    /**
     * 作业使用的配额昵称列表
     */
    "quotaNicknameList"?: string[];
    /**
     * 页码
     * @example `1`
     */
    "pageNumber"?: number;
    /**
     * 每页返回数目，默认为10，最大为100
     * @example `10`
     */
    "pageSize"?: number;
}
