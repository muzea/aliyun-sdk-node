export interface GetBucketReplicationLocationResponse {
    /**
     * 可复制地域信息的容器。
     */
    ReplicationLocation: {
        /**
         * 可复制到的目标Bucket所在的地域列表。
         * > 如果有多个可复制到的目标地域，那么返回的结果中包含多个Location。如果没有可复制到的目标地域，则返回的Location为空。
         */
        Location: string[];
        /**
         * 包含TransferType约束的Location信息容器。
         */
        LocationTransferTypeConstraint: {
            /**
             * 包含TransferType的Location信息容器。
             */
            LocationTransferType: any[];
        };
        /**
         * 包含RTC约束的Location信息容器。
         */
        LocationRTCConstraint: {
            /**
             * 支持RTC的Location信息列表。
             */
            Location: string[];
        };
    };
}
