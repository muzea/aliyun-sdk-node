export interface DescribeContainerLogResponse {
    /**
     * 请求ID，唯一标识。
     * @example `CA850ADA-****-4AC8-****-5B5990EAB7D0`
     */
    RequestId: string;
    /**
     * 容器名称。
     * @example `nginx`
     */
    ContainerName: string;
    /**
     * 日志内容。
     * @example `{}`
     */
    Content: string;
}
