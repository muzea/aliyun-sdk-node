export interface GetFaceEntityResponse {
    /**
     * 请求ID。
     * @example `DA7CAFEB-0A37-4496-9CDF-E3DBB6309CB2`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 数据库名称。
         * @example `default`
         */
        DbName: string;
        /**
         * 实体ID。
         * @example `66`
         */
        EntityId: string;
        /**
         * 查询到的人脸标签。
         * @example `工厂`
         */
        Labels: string;
        /**
         * 查询到的人脸数据。
         */
        Faces: {
            /**
             * 人脸数据ID。
             * @example `3`
             */
            FaceId: string;
        }[];
    };
}
