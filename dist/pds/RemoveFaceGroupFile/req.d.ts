export interface RemoveFaceGroupFileRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 空间id
         * @example `123`
         */
        drive_id: string;
        /**
         * 人脸分组 id
         * @example `Cluster-abc`
         */
        face_group_id: string;
        /**
         * 需要被移除人脸分组的文件id
         * @example `abcd`
         */
        file_id: string;
    };
}
