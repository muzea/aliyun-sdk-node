export interface MigrateImageProtocolResponse {
    /**
     * 请求ID。
     * @example `4D4E5AF5-DF28-5FE7-85C7-9F98315B****`
     */
    RequestId: string;
    /**
     * 失败的镜像ID列表。
     */
    FailedIds: string[];
}
