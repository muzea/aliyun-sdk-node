export interface UpdateSubnetResponse {
    /**
     * 系统返回状态码
     * @example `0`
     */
    Code: number;
    /**
     * 返回信息
     * @example `success`
     */
    Message: string;
    /**
     * 本次请求的ID
     * @example `3D9D6E7B-365B-5200-BFA6-9B79E269058C`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
        /**
         * 灵骏子网实例ID
         * @example `subnet-yuvn29bn`
         */
        SubnetId: string;
    };
}
