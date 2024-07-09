export interface UpdateImageInfosResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4AF6-D7393642CA58****`
     */
    RequestId: string;
    NonExistImageIds: {
        /**
         * 不存在的图片ID列表。
         */
        ImageId: string[];
    };
}
