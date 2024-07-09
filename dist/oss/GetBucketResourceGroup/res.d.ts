export interface GetBucketResourceGroupResponse {
    /**
     * 资源组ID的容器。
     */
    BucketResourceGroupConfiguration: {
        /**
         * Bucket所属的资源组ID。
         * @example `rg-asdfklj***`
         */
        ResourceGroupId: string;
    };
}
