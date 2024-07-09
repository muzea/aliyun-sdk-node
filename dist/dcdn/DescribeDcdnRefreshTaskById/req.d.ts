export interface DescribeDcdnRefreshTaskByIdRequest {
    /**
     * 待查询的任务ID。具体如下：
     * - 调用[RefreshDcdnObjectCaches](~~RefreshDcdnObjectCaches~~)接口，获取刷新任务ID。
     * - 调用[PreloadDcdnObjectCaches](~~PreloadDcdnObjectCaches~~)接口，获取预热任务ID。
     * > 每次调用最多可以传入10个任务ID，多个任务ID用英文逗号（,）分隔。
     * @example `113681**`
     */
    "TaskId": string;
}
