export interface CompareImageFacesRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 链式授权配置，非必填。更多信息，请参见[使用链式授权访问其他实体资源](~~465340~~)。
     */
    "CredentialConfig"?: any;
    /**
     * 对比的两张图片地址。
     */
    "Source"?: {
        /**
         * 图片的OSS地址。
         * 地址规则为`oss://<bucket>/<object>`，其中`<bucket>`为和当前项目处于同一地域的OSS Bucket名称，`<object>`为包含文件扩展名的文件完整路径。
         * @example `oss://test-bucket/test-object1`
         */
        URI1: string;
        /**
         * 图片的OSS地址。
         * 地址规则为`oss://<bucket>/<object>`，其中`<bucket>`为和当前项目处于同一地域的OSS Bucket名称，`<object>`为包含文件扩展名的文件完整路径。
         * @example `oss://test-bucket/test-object2`
         */
        URI2: string;
    };
}
