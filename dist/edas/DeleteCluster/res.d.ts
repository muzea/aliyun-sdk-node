export interface DeleteClusterResponse {
    /**
     * 接口响应码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加消息。
     * @example `success`
     */
    Message: string;
    /**
     * 处理结果：
     * * true - 删除成功。
     * * false - 删除失败。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求ID。
     * @example `856D4438-****-4EA9-****-894628C0434E`
     */
    RequestId: string;
}
