export interface ImportImageResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 镜像ID。
     * @example `m-bp67acfmxazb4p****`
     */
    ImageId: string;
    /**
     * 导入镜像任务ID。
     * @example `t-bp67acfmxazb4p****`
     */
    TaskId: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
}
