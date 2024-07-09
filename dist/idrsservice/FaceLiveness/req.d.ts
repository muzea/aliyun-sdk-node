export interface FaceLivenessRequest {
    /**
     * 请求参数
     */
    "FaceRequest": {
        /**
         * 双录质检应用ID
         * @example `d61be709-49d2-4cf1-b219-cd6181f72***`
         */
        AppId: string;
        /**
         * 照片Base64编码。
         * @example `/9j/4AAQSkZJRgABAQAASxxxxxxx`
         */
        SourceImage: string;
    };
}
