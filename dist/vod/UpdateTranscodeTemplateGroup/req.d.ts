export interface UpdateTranscodeTemplateGroupRequest {
    /**
     * 转码模板组名称。
     * - 长度不超过128个字节。
     * - UTF-8编码。
     * @example `transcodetemplate`
     */
    "Name"?: string;
    /**
     * 转码模板配置信息（JSON字符串）。参数结构详情，请参见[TranscodeTemplate](~~52839#title-9mb-8o2-uu6~~)。
     * @example `[{"Video":{"Bitrate":"400","Codec":"H.264","Fps":"30"},"Audio":{"Codec":"AAC","Bitrate":"64","Definition":"SD","EncryptType":"Private","Container":{"Format":"m3u8"},"PackageType":"HLSPackage"}}]`
     */
    "TranscodeTemplateList"?: string;
    /**
     * 模板组锁定状态。取值范围：
     * - **Enabled**：锁定，处于锁定状态的模板组将无法被修改。
     * - **Disabled**（默认）：不锁定。
     * @example `Disabled`
     */
    "Locked"?: string;
    /**
     * 转码模板组ID。
     * @example `4c71a339fe*****52b4fa6f4527`
     */
    "TranscodeTemplateGroupId": string;
}
