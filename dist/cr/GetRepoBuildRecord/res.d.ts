export interface GetRepoBuildRecordResponse {
    /**
     * 状态
     * @example `true`
     */
    Status: string;
    /**
     * 终止时间
     * @example `1568718698000`
     */
    EndTime: number;
    /**
     * 开始时间
     * @example `1568718468000`
     */
    StartTime: number;
    /**
     * 请求ID
     * @example `a78ec6fb-16ea-4649-93b7-f52afba7d9de1	`
     */
    RequestId: string;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 构建记录ID
     * @example `79174CBA-8556-443A-8976-22C922D7****`
     */
    BuildRecordId: string;
    /**
     * 镜像信息
     */
    Image: {
        /**
         * 镜像仓库命名空间名称
         * @example `test`
         */
        RepoNamespaceName: string;
        /**
         * 镜像TAG
         * @example `master`
         */
        ImageTag: string;
        /**
         * 镜像仓库名称
         * @example `test`
         */
        RepoName: string;
    };
}
