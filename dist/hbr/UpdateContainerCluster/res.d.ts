export interface UpdateContainerClusterResponse {
    /**
     * 集群token是否更新。
     * @example `false`
     */
    TokenUpdated: boolean;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 集群token，用于集群中hbr客户端注册使用。
     * @example `eyJhY2NvdW*****VnZpgXQC5A==`
     */
    Token: string;
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回码，200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
}
