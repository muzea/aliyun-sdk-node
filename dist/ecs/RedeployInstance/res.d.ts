export interface RedeployInstanceResponse {
    /**
     * 重新部署的任务ID。
     * 您可以使用[DescribeTasks](~~25622~~)接口查询迁移结果。
     * @example `t-bp10e8orkp8x****`
     */
    TaskId: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
}
