export interface DeleteImagesResponse {
    /**
     * 删除结果。
     */
    Data: {
        /**
         * 删除成功的镜像ID列表。
         */
        SuccessDeleteImageIds: string[];
        /**
         * 删除失败的镜像ID列表。
         */
        FailDeleteImageIds: string[];
    };
    /**
     * 请求ID。
     * @example `4610632D-D661-5982-B3D7-5D3FD183F595`
     */
    RequestId: string;
}
