export interface ListSecretsResponse {
    /**
     * 当前页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页返回值的个数。
     * @example `2`
     */
    PageSize: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6a6287a0-ff34-4780-a790-fdfca900557f`
     */
    RequestId: string;
    /**
     * 凭据列表中的凭据个数。
     * @example `55`
     */
    TotalCount: number;
    SecretList: {
        /**
         * 凭据列表。
         */
        Secret: {
            /**
             * 凭据名称。
             * @example `secret001`
             */
            SecretName: string;
            /**
             * 更新时间。
             * @example `2023-07-17T07:59:05Z`
             */
            UpdateTime: string;
            /**
             * 凭据类型。取值：
             * - Generic：普通凭据。
             * - Rds：托管RDS凭据。
             * @example `Generic`
             */
            SecretType: string;
            /**
             * 计划删除时间。
             * @example `2023-08-17T07:59:05Z`
             */
            PlannedDeleteTime: string;
            /**
             * 创建时间。
             * @example `2023-07-17T07:59:05Z`
             */
            CreateTime: string;
            Tags: {
                /**
                 * 凭据的资源标签。
                 * 如果FetchTags取值为false或者未指定，则不返回该参数。
                 */
                Tag: {
                    /**
                     * 标签值。
                     * @example `val1`
                     */
                    TagValue: string;
                    /**
                     * 标签键。
                     * @example `key1`
                     */
                    TagKey: string;
                }[];
            };
        }[];
    };
}
