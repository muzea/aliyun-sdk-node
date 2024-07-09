export interface UpdateFacegroupRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 空间id
         * @example `1`
         */
        drive_id: string;
        /**
         * 人脸分组id, 通过列举人脸分组接口返回的结果中获取
         * @example `group-abc`
         */
        group_id: string;
        /**
         * 人脸分组名称，长度最大128字符
         * @example `张三人脸`
         */
        group_name: string;
        /**
         * 人脸分组封面人脸ID, 通过文件接口file/get,file/list,file/search的返回结果**ImageMediaMetadata**字段中进行获取
         * @example `face1`
         */
        group_cover_face_id: string;
        /**
         * 备注，长度最大128字符
         * @example `张三`
         */
        remarks: string;
    };
}
