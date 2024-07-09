export interface ListShardRecoveriesRequest {
    /**
     * 实例ID。
     * @example `es-cn-7mz293m9a003j****`
     */
    "InstanceId": string;
    /**
     * 显示分片数据恢复跟踪情况，取值含义如下：
     * - true：显示正在进行中的分片数据恢复跟踪情况。
     * - false：显示全部的分片数据恢复跟踪情况。
     * @example `true`
     */
    "activeOnly"?: boolean;
}
