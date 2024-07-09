export interface GetBucketTransferAccelerationResponse {
    /**
     * 保存传输加速配置信息的容器。
     */
    TransferAccelerationConfiguration: {
        /**
         * 是否开启传出加速。
         * @example `true`
         */
        Enabled: boolean;
    };
}
