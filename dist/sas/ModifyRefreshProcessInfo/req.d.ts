export interface ModifyRefreshProcessInfoRequest {
    /**
     * 指定要刷新的服务器的uuid。
     * > 调用[DescribeCloudCenterInstances](~~141932~~)接口获取该参数。
     * @example `0f3b8f76-90e5-4455-a5aa-23ce30b5****`
     */
    "Uuid"?: string;
}
