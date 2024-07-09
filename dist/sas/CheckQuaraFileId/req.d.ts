export interface CheckQuaraFileIdRequest {
    /**
     * 校验隔离文件的服务器的ID。
     * > 调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取该参数。
     * @example `4fe8e1cd-3c37-4851-b9de-124da32c****`
     */
    "Uuid": string;
    /**
     * 需要检测的隔离文件ID集合。
     * > 调用[DescribeSuspEventQuaraFiles](~~DescribeSuspEventQuaraFiles~~)接口获取该参数。
     */
    "QuaraFileIds": string[];
}
