export interface DeleteTranscodeTemplateGroupResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4A*****F6-D7393642CA58`
     */
    RequestId: string;
    /**
     * 根据转码模板ID列表删除转码模板时，不存在的转码模板ID列表。
     */
    NonExistTranscodeTemplateIds: string[];
}
