export interface UnbindAegisRequest {
    /**
     * 指定要解除绑定的非阿里服务器的UUID。存在多个UUID时使用英文逗号（,）分隔。
     * > 调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取该参数。
     * @example `4fe8e1cd-3c37-4851-b9de-124da32c****`
     */
    "Uuids": string;
}
