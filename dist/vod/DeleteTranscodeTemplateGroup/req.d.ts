interface DeleteTranscodeTemplateGroupRequest {
    "RegionId"?: string;
    /**
    * 转码模板组ID。
    * @example `4c71a339fecec0152b4fa6f4527xxx`
    */ "TranscodeTemplateGroupId": string;
    "OwnerId"?: number;
    /**
    * 需要删除的转码模板ID列表。ID以英文逗号分隔，最大支持10个模板ID。
    * > **DeleteMode**取值**DeleteTranscodeTemplate**时，该参数必传。
    * @example `["dddddd","ffffff"]`
    */ "TranscodeTemplateIds"?: string;
    /**
    * 是否强制删除整个转码模板组。取值：
    * - **true**：删除整个模板组及其转码模板列表。
    * - **false（默认）**：只删除指定的转码模板。
    * @example `true`
    */ "ForceDelGroup"?: string;
}
export { DeleteTranscodeTemplateGroupRequest };