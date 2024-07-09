export interface GetOSSBucketAttachmentResponse {
    /**
     * 请求ID。
     * @example `5F74C5C9-5AC0-49F9-914D-E01589D3****`
     */
    RequestId: string;
    /**
     * 绑定的项目名称。
     * @example `immtest`
     */
    ProjectName: string;
    /**
     * 数据集描述。
     * @example `"数据集"`
     */
    Description: string;
    /**
     * 数据集的创建时间。
     * @example `""2023-12-19T17:29:34.790931971+08:00"`
     */
    CreateTime: string;
    /**
     * 数据集更新时间。
     * @example `"2023-12-19T17:29:34.790931971+08:00"`
     */
    UpdateTime: string;
}
