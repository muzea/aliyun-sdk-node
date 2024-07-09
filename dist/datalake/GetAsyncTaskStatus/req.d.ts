export interface GetAsyncTaskStatusRequest {
    /**
     * 数据库分类命名空间，默认填写主账号Uid
     * @example `1344371`
     */
    "CatalogId"?: string;
    /**
     * 异步任务返回的结果中获取
     * @example `f546c761570e5efc8146a1986f7890d2`
     */
    "TaskId"?: string;
}
