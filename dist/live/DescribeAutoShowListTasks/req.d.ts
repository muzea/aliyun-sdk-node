export interface DescribeAutoShowListTasksRequest {
    /**
     * 需要查询定时任务的导播台ID。
     * >如果您通过[InitializeAutoShowListTask](~~410929~~)接口创建定时任务，请查看InitializeAutoShowListTask接口返回参数CasterId值。若不填，默认查询OwnerId下的全量定时任务。
     * @example `53200b81-b761-4c10-842a-a0726d97****`
     */
    "CasterId"?: string;
}
