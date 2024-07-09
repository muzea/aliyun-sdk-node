export interface AssignReviewerRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `{"assignmentList":[{"taskId":"1C21CF1E-2917-4236-A046-20E37B293B69","fileId":"7981b466fd6a4c70a7065da159739a5b"},{"taskId":"0111DDBC-5F10-47E0-B7D4-7175F47D626F","fileId":"1814eeae3cff41e989e31ab547f07561"}],"assignments":[{"reviewer":"255746168704895558"},{"reviewer":"268370362815185444"}]}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
