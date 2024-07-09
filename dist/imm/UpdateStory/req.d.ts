export interface UpdateStoryRequest {
    /**
     * 项目名称。
     * @example `immtest`
     */
    "ProjectName": string;
    /**
     * 数据集名称。
     * @example `testdata`
     */
    "DatasetName": string;
    /**
     * 故事ID。
     * @example `testid`
     */
    "ObjectId": string;
    /**
     * 故事名称。
     * @example `newstory`
     */
    "StoryName"?: string;
    /**
     * 封面图片。
     */
    "Cover"?: {
        /**
         * 图片文件的存储位置。
         * OSS地址规则为oss://${Bucket}/${Object}，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}`为包含文件扩展名的文件完整路径。
         * @example `oss://test-bucket/test-object`
         */
        URI: string;
    };
    /**
     * 自定义标签，最多支持100个。
     * @example `{"key": "value"}`
     */
    "CustomLabels"?: any;
    /**
     * 自定义ID。
     * @example `test`
     */
    "CustomId"?: string;
}
