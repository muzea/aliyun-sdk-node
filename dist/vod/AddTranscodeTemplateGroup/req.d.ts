interface AddTranscodeTemplateGroupRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 转码模板组名称。长度不超过128个字节，UTF-8编码。
    * **TranscodeTemplateGroupId**和**Name**必须传递一个。
    * @example `transcodetemplate`
    */ "Name"?: string;
    /**
    * 转码模板配置信息(JSON字符串)。
    * 该参数不传递，则不会构建转码处理流程，视频上传不会触发转码。
    * @example `[{"Video":{"Bitrate":"400","Codec":"H.264","Fps":"30"},"Audio":{"Codec":"AAC","Bitrate":"64","Definition":"SD","EncryptType":"Private","Container":{"Format":"m3u8"},"PackageType":"HLSPackage"}}]`
    */ "TranscodeTemplateList"?: string;
    /**
    * 转码模板组ID。
    * @example `4c71a339fecec0152b4fa6f4527xxx`
    */ "TranscodeTemplateGroupId"?: string;
    /**
    * 应用ID。取值如：**app-1000000**。使用说明参考文档[多应用](https://help.aliyun.com/document_detail/113600.html?spm=a2c4g.11186623.2.17.33456d22HYxXg0)。
    * @example `app-xxxxx`
    */ "AppId"?: string;
}
export { AddTranscodeTemplateGroupRequest };