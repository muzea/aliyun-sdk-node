export interface DescribeImagePermissionResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 接受镜像共享的阿里云账号ID列表。
     */
    AliUids: string[];
}
