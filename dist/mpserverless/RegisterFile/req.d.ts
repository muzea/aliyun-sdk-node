export interface RegisterFileRequest {
    /**
     * 唯一标识。取值为DescribeFileUploadSignedUrl接口返回的ID。
     * @example `2fada31e-8fa5-****-b595-9698cd6b5f06`
     */
    "Id": string;
    /**
     * 服务空间ID。
     * @example `0e16bb12-****-4635-b24c-5ac1a9a7bb9f`
     */
    "SpaceId": string;
}
