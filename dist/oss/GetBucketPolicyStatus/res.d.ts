export interface GetBucketPolicyStatusResponse {
    /**
     * 保存公共访问信息的容器。
     */
    PolicyStatus: {
        /**
         * 当前Bucket Policy是否包含公共访问的语义。
         * - true：包含公共访问的语义。
         * - false：不包含公共访问的语义或者没有设置Bucket Policy。
         * @example `true`
         */
        IsPublic: boolean;
    };
}
