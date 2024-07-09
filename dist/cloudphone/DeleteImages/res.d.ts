export interface DeleteImagesResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    ImageResponses: {
        /**
         * 镜像删除状态列表
         */
        ImageResponse: {
            /**
             * 删除镜像响应码。
             * @example `200`
             */
            Code: string;
            /**
             * 删除镜像响应信息。
             * @example `Success.`
             */
            Message: string;
            /**
             * 请求删除的镜像ID。
             * @example `cpm-xxxxxxxx`
             */
            ImageId: string;
        }[];
    };
}
