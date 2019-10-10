interface UpdateTranscodeTemplateGroupRequest {
    "RegionId"?: string;
    /**
    * 转码模板组ID。
    * @example `4c71a339fecec0152b4fa6f4527xxx`
    */ "TranscodeTemplateGroupId": string;
    "OwnerId"?: number;
    /**
    * 转码模板组名称。长度不超过128个字节，UTF-8编码。
    * @example `transcodetemplate`
    */ "Name"?: string;
    /**
    * 转码模板配置信息(JSON字符串)。
    * @example `[{"Video":{"Bitrate":"400","Codec":"H.264","Fps":"30"},"Audio":{"Codec":"AAC","Bitrate":"64","Definition":"SD","EncryptType":"Private","Container":{"Format":"m3u8"},"PackageType":"HLSPackage"}}]`
    */ "TranscodeTemplateList"?: string;
    /**
    * 指定的转码模板被锁定。
    * @example `locked`
    */ "Locked"?: string;
}
export { UpdateTranscodeTemplateGroupRequest };