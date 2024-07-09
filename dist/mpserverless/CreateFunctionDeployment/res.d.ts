export interface CreateFunctionDeploymentResponse {
    /**
     * 上传的URL。
     * @example `http://bucket.oss-cn-shanghai.aliyuncs.com/afc0e1c9d446fxxxxx-v2.zip?OSSAccessKeyId=LTAIKCq5x****kK6&Expires=1561425220&Signature=xEuiAgUMShQ4v8fYIl3FM8Jp3MA%3D`
     */
    UploadSignedUrl: string;
    /**
     * 部署单ID。
     * @example `dep-5e49fd471c9d4451c33bdd06`
     */
    DeploymentId: string;
    /**
     * 请求ID。
     * @example `9D653EC3-8F53-4307-9B1C-52F5922384A6`
     */
    RequestId: string;
}
