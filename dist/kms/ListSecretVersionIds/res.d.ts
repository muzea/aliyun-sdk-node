export interface ListSecretVersionIdsResponse {
    /**
     * 凭据名称。
     * @example `secret001`
     */
    SecretName: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `5b75d8b1-5b6a-4ec0-8e0c-c08befdfad47`
     */
    RequestId: string;
    /**
     * 当前页大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表项总个数。
     * @example `1`
     */
    TotalCount: number;
    VersionIds: {
        /**
         * 凭据的版本信息列表。
         */
        VersionId: {
            /**
             * 版本号。
             * @example `v1`
             */
            VersionId: string;
            /**
             * 版本的创建时间。
             * @example `2024-02-21T15:39:26Z`
             */
            CreateTime: string;
            VersionStages: {
                VersionStage: string[];
            };
        }[];
    };
}
