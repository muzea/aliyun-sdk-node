export interface DeleteTranscodeTemplateGroupRequest {
    /**
     * 转码模板组ID。
     * @example `4c71a339fec*****152b4fa6f4527`
     */
    "TranscodeTemplateGroupId": string;
    /**
     * 需要删除的转码模板ID列表。
     * - 多个ID使用英文逗号（,）分隔。
     * - 最大支持10个模板ID。
     * - 当参数ForceDelGroup为空或false时该参数必填。
     * @example `["613702defdc4*****6a3b94cace1129e","bfd6c90253a2*****7fc054d7c5825"]`
     */
    "TranscodeTemplateIds"?: string;
    /**
     * 是否强制删除整个转码模板组。取值：
     * - **true**：删除整个模板组及其转码模板列表。
     * - **false**（默认）：仅删除指定的转码模板。
     * @example `true`
     */
    "ForceDelGroup"?: string;
}
