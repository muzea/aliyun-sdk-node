export interface DescribeImageResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7E0618A9-D5EF-4220-9471-C42B5E92719F`
     */
    RequestId: string;
    /**
     * 返回的镜像Digest信息。
     */
    Data: {
        /**
         * 镜像Digest值。
         * @example `0afb98d97f1a4030782fcf47e186909e5ad957bcc182d8be70334e0684b2****`
         */
        Digest: string;
    };
}
