export interface AddTagWithUuidRequest {
    /**
     * 标签名称。
     * @example `InternetIp`
     */
    "TagName": string;
    /**
     * 指定服务器UUID列表。多个UUID使用半角逗号（,）分隔。
     * > 您可以调用[DescribeCloudCenterInstances ](~~DescribeCloudCenterInstances~~)接口获取该参数。
     * @example `71f5313e-4355-4c59-86d1-557dda7b****,71f5313e-4355-4c59-86d1-557dda7b****`
     */
    "UuidList"?: string;
}
