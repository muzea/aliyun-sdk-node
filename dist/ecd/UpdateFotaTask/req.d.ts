export interface UpdateFotaTaskRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 镜像升级任务的信息。可调用[DescribeFotaTasks](~~437001~~)获取该参数。
     * @example `aot-c4khwrp9ocml4****`
     */
    "TaskUid": string;
    /**
     * 设置镜像升级任务是否自动推送。
     * @example `Pending`
     */
    "UserStatus"?: string;
}
