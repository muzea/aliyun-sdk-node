export interface RemoveStoryFilesRequest {
    /**
     * 项目名称。
     * @example `immtest`
     */
    "ProjectName": string;
    /**
     * 数据集名称。
     * @example `testdataset`
     */
    "DatasetName": string;
    /**
     * 故事ID。
     * @example `testid`
     */
    "ObjectId": string;
    /**
     * 需要删除的文件列表。
     */
    "Files": {
        /**
         * 文件的存储位置。
         * OSS地址规则为oss://${Bucket}/${Object}，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}`为包含文件扩展名的文件完整路径。
         * @example `oss://test-bucket/test-object`
         */
        URI: string;
    }[];
}
