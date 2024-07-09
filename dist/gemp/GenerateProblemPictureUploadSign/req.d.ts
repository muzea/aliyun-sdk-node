export interface GenerateProblemPictureUploadSignRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 文件名
         * @example `test`
         */
        fileName: string;
        /**
         * 文件类型
         * @example `png`
         */
        fileType: string;
        /**
         * 文件大小KB
         * @example `1000`
         */
        fileSize: number;
        /**
         * 故障id
         * @example `67876`
         */
        problemId: number;
    };
}
