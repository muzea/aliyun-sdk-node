export interface UploadEntityRequest {
    /**
     * 工作空间
     * @example `test-workspace`
     */
    "Workspace": string;
    /**
     * 实体表格CSV文件的OSS地址
     * @example `https://my-bucket.oss.aliyucs.com/entity.csv`
     */
    "EntityCSVFile": string;
}
