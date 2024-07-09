export interface DescribeImageInfoListRequest {
    /**
     * 指定服务器的UUID。存在多个UUID时使用英文逗号（,）分隔。
     * > 调用[DescribeCloudCenterInstances](~~141932~~)接口获取该参数。
     * @example `391abd09184cbd3743d7f5ec125d****,
    e6aeb2a5b6004479398b0bcd1160****`
     */
    "Uuids": string;
}
