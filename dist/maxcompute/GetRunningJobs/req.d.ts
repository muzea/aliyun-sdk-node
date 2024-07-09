export interface GetRunningJobsRequest {
    /**
     * 查询开始时间点。该时间是指作业的提交时间。
     * - 请求参数**from**和**to**定义的时间区间遵循双闭原则，即该时间区间既包括区间开始时间点也包括区间结束时间点。如果**from**和**to**的值相同，则为无效区间，函数直接返回空。
     * - Unix时间戳格式，表示从1970-1-1 00:00:00 UTC计算起的秒数。
     * @example `1683785928`
     */
    "from": number;
    /**
     * 查询结束时间点。该时间是指作业的提交时间。
     * - 请求参数**from**和**to**定义的时间区间遵循双闭原则，即该时间区间既包括区间开始时间点也包括区间结束时间点。如果**from**和**to**的值相同，则为无效区间，函数直接返回空。
     * - Unix时间戳格式，表示从1970-1-1 00:00:00 UTC计算起的秒数。
     * @example `1683612946`
     */
    "to": number;
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
     * 每页返回数目，默认为10，最大为20
     * @example `10`
     */
    "pageSize"?: number;
}
