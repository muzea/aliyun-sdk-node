export interface CreateBindingRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 数据集名称，获取方式请参见[创建数据集](~~478160~~)。
     * @example `test-dataset`
     */
    "DatasetName": string;
    /**
     * 数据集绑定的对象存储（OSS） Bucket URI。
     * 对象存储（OSS） Bucket URI 的格式为oss://${Bucket}，其中`${Bucket}`为和当前项目处于同一地域的 OSS Bucket 名称。
     * @example `oss://test-bucket`
     */
    "URI": string;
}
